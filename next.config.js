function throwError(envVar) {
  throw `Abort: You need to define ${envVar} in the .env.example file and rename it to .env.`
}

if (!process.env.RESEND_API_KEY) return throwError('RESEND_API_KEY');