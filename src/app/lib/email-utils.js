const TOKEN_FILE_PATH = path.join(process.cwd(), 'zoho-token.txt')

async function requestWrapper(accessToken, email, subject, text, ACCOUNT_ID) {
    try {
        return await axios.post(
            `https://mail.zoho.eu/api/accounts/${ACCOUNT_ID}/messages`,
            {
                fromAddress: 'sales@wooolama.com',
                toAddress: email,
                subject,
                content: text,
            },
            {
                headers: {
                    Authorization: `Zoho-oauthtoken ${accessToken}`,
                },
            }
        )
    } catch (error) {
        console.error('Error in requestWrapper:', error)
        return false
    }
}

const emailSender = async (emails, subject, text, tryCount) => {
    try {
        const { ACCOUNT_ID } = process.env
        const accessToken = await getZohoAccessTokenFile()

        if (!accessToken) {
            throw new Error('No access token received')
        }

        const email = emails.join(',')

        const requestRes = await requestWrapper(
            accessToken,
            email,
            subject,
            text,
            ACCOUNT_ID
        )

        if (!requestRes) {
            if (tryCount >= 2)
                throw new Error('Error, cannot get access token to send email')
            await getZohoAccessToken()
            return await emailSender(emails, subject, text, tryCount + 1)
        }
        return requestRes
    } catch (error) {
        console.error('error catched in emailSender', error)
        throw error
    }
}

async function ensureTokenFile() {
    try {
        await fs.access(TOKEN_FILE_PATH)
    } catch {
        await fs.writeFile(TOKEN_FILE_PATH, '', 'utf8')
    }
}

async function updateZohoAccessTokenDB(access_token) {
    try {
        await ensureTokenFile()
        await fs.writeFile(TOKEN_FILE_PATH, access_token, 'utf8')
        return true
    } catch (error) {
        console.error('Error writing token to file:', error)
        throw error
    }
}

async function getZohoAccessTokenFile() {
    try {
        await ensureTokenFile()
        const token = await fs.readFile(TOKEN_FILE_PATH, 'utf8')
        return token.trim() || null
    } catch (error) {
        console.error('Error reading token from file:', error)
        throw error
    }
}

async function getZohoAccessToken() {
    const response = await axios.post(
        `https://accounts.zoho.eu/oauth/v2/token?refresh_token=${ZOHO_REFRESH_TOKEN}&grant_type=refresh_token&client_id=${ZOHO_CLIENT_ID}&client_secret=${ZOHO_CLIENT_SECRET}`
    )

    if (response.data.error) {
        throw new Error(`Error fetching access token: ${response.data.error}`)
    }
    const tokenData = response.data.access_token
    if (!tokenData) throw new Error('No access token received')
    await updateZohoAccessTokenDB(tokenData)
}
