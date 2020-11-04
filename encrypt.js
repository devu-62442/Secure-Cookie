import crypto from 'crypto'

export default {
    encrypt(accessToken) {
        const key = crypto.createHash('sha256').update(String('data')).digest('base64').substr(0, 32)
        const accessCipher = crypto.createCipheriv('aes-256-cbc', key, 'a1b2c3d4e5f6g7h8') 
        let token = accessCipher.update(JSON.stringify(accessToken), 'utf8', 'hex')
        token += accessCipher.final('hex')
        return token
    },
}
