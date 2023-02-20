import { config } from '../../config'

export const ErrorHandler = (err: any, req: any, res: any, next: any) => {
  const errStatus = err.statusCode || 500
  const errMsg = err.message || 'Something went wrong'
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg,
    stack: config.NODE_ENV === 'development' ? err.stack : {},
  })
}
