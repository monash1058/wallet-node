import bcrypt from 'bcrypt'

export const convertToHash = async (str: any) => {
  const password = await bcrypt.hash(str, 10)
  return password
}

export const compareHash = async (str: any, hash: any) => {
  const isValid = await bcrypt.compare(str, hash)
  return isValid
}
