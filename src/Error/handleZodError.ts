import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse } from '../interfaces/common';
import { IGenericErrorMessage } from '../interfaces/error';

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const issues: IGenericErrorMessage[] = error?.errors?.map((err: ZodIssue) => {
    return {
      path: err?.path[err.path.length - 1],
      message: err?.message,
    };
  });
  const statusCode = 500;
  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: issues,
  };
};

export default handleZodError;
