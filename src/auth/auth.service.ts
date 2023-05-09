import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AuthDto } from './dto';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config/dist';
import { promises } from 'dns';
@Injectable()
export class AuthService {
  // eslint-disable-next-line prettier/prettier
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}
  async signup(dto: AuthDto) {
    //generate password hash
    const hash = await argon.hash(dto.password);
    //save the new user in te db

    try {
      const user = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash,
        },
      });
      return this.signToken(user.id, user.email);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ForbiddenException('credentials Taken');
        }
      }
      throw err;
    }
  }
  async signin(dto: AuthDto) {
    //find the user
    const user = await this.prisma.user.findUnique({
      where: {
        email: dto.email,
      },
    });
    // if user is not found throw exception
    if (!user) {
      throw new ForbiddenException('credentials incorrect');
    }
    // compare password
    const pwdmatches = await argon.verify(user.hash, dto.password);
    // if password incorrect throw exception
    if (!pwdmatches) {
      throw new ForbiddenException('Password incorrect');
    }
    // send back the user jwt
    return this.signToken(user.id, user.email);
  }

  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET_KEY');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });
    return {
      access_token: token,
    };
  }
}
