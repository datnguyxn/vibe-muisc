import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import mongoose from "mongoose";
import variables from "./variables.js";

// const credentials = {
//     "type": "service_account",
//     "project_id": "vibe-61209",
//     "private_key_id": "84324fb8c8ea02e75341b01623764a18115d4444",
//     "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC6jqu12VQaeL8g\n1angbYTShXsDxgqjku+L/uIjxXIDIUMrg1UE6HYfT7srvB+cHosTIoan4KyNyrqa\n+Z5UuNvou1BDoPYouoTXVFP43kJzElULkjq0cQ/xv1X63xltyXjU/T1xUNfYemXm\n96M01Pl9tOdNS9W7fmUqhNAs7GUV1NLZZ2hyyX1H1oo5eCsRNvM5kzr0c+Y7nSl2\nKNq+2ev55cJOe2m45I6TJ/cOeWuZQuGSdYg+jNSDA4p9vw2arrxWlHPHP8UoCV4H\n8gKlJ8n3PnUnX3yVHj7vsozT/68yAmSwV1TVo8BUd7wlU8L096Df6RM7DqYEVoR8\nvUxG13TJAgMBAAECggEAMSzIUE/wHmYzozkO5UyZFVEAAxeh2Eo0AIf4Hgu+qNqM\ntRySPY/1Cv3eTYHyJxnZ+PpB2mCbu2hz1cP0m0p7FRbC6oC0QjogKA5fcBtOEr0D\nU+CAvu2KkWOpC07hihHwWtxB5Ou1aaeh0sb160g0V5Fm4vYZaanAivulUCIj5yPW\nAqa1EmF3UQOeRJJy5zXIEzZQ7rGSqS0UjGLduGcWESGI6BL76cMWgPD/WMNPgt5r\ns2c/2iUq8pDQ6ss66qUzyu2i6MxFCIQBLxquItEtQkCIO5RnxheEF/a8SqatS5bz\nvwNHng+ly1sgJbSThvSF0m7zxgdHe691A8igmfW6HQKBgQDiqyfYT3otWLcfY12/\npCo2rqhUZsTQ0LW0q38HIqOYFIE/y5uOSzW7WzmJRmiZywQMxm2rSMLJh6pertxM\njDGc3FTyR0tCbOXQdlHvStv4QPKTCyok/w1V/w4U0dqqOE1jh0bwg7tLbA682xO3\nujGFrLYrB/0xQEhJuDwh07kVfwKBgQDSssAE5XYzueiF8Apz0ZKIsNGtJOP7jBK3\nnm/h4IQuKdVIWh+fud4u2DUVAPnj7T99WiG/kWeCYh9PaM9BqJsNEf1EUfQ3f2M/\n/T5epCZij/38on1XyUqZEqAMhQrOJAqjn2x/gglbctYpf1JMLICX2BgnzakIe7Hd\n1VvzCEhptwKBgQC0HmoFO/LMggjSinV+ygc5eMUOfLO9c3xQ206P7vis6u5iMXul\nMSK7hRxNd4O7YlYPiMaxK5qN5p59qtoogecSzQs7k2e8myhr5Pnq+0OdHI8mReLx\njzObuJgJ91CZny/v/RlkGmoE3xM/A5/BidW8cag4vZp3Pquy2RH/l20mJQKBgFql\nQk0Y9xBr4+hzi9umBve9sodd/qNC8O6EQDgaImPF5ZdaBo7uJPNcWwHtSJTRheYE\n98313WVPl47PVZM22XX3DlHtPDcAHA/0gHexAT6YGjotIeW5mNlgFPEt76ceBGG+\nfawhoqrwLcjumNZisvQgqMu/BAC9TplUaFmXb6fjAoGBAN96gjM9MKBAY/nrB3Rc\neLRKQmpYPlOQKw334wms/XL9uw/bqME4ZSmvcaHnIuKQ4N2Rk88F5eG7wd0uaUP/\nawcN0AItOESqYi3Kx0rITpcjjwrdqui16LZJpLLQHFcWbWMYgGUVg1EOAwq3I02V\nGvlvUxd4jbKNsyfUDFGnBjnY\n-----END PRIVATE KEY-----\n",
//     "client_email": "firebase-adminsdk-7mocd@vibe-61209.iam.gserviceaccount.com",
//     "client_id": "105432382087807368243",
//     "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//     "token_uri": "https://oauth2.googleapis.com/token",
//     "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//     "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7mocd%40vibe-61209.iam.gserviceaccount.com",
//     "universe_domain": "googleapis.com"
// }
mongoose.set("strictQuery", true)


const connector = async () => {
    try {
        await mongoose.connect(variables.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
}

export default connector;

// export {credentials};