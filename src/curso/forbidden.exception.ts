import { HttpStatus } from "@nestjs/common/enums/http-status.enum";
import { HttpException } from "@nestjs/common/exceptions/http.exception";

export class ForbiddenException extends HttpException {
    constructor() {
      super('Deu erro amigão, tenta de novo', HttpStatus.FORBIDDEN);
    }
  }