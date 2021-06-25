import mailgun from 'mailgun-js'
const mailgunSender = mailgun(
     {
          domain:process.env.MAILGUN_DOMAIN,
          apiKey:process.env.MAILGUN_API_KEY,
     }
)
 export default async function send_Message (subject, body, client){
     mailgunSender.messages().send(
          {
               subject: subject || ' New User Registration',
               from:'Alice@mail.healthsure.xyz',
               // to: "anymail4eze@gmail.com, alice.bob@getnada.com",
               to:"alicebob@getnada.com",
               text: body || `Hello, ${client} Just Signed up on HealthTrack. You are receiving this because you are a verified recipient on HealthTrack.`
          },
          (error,body)=>{
            console.log(error ? error.message : body)
                }
     )
}

export  async function send_single_Message (to, subject, body ){
     mailgunSender.messages().send(
          {
               subject,
               from:'Alice@mail.healthsure.xyz',
               to,
               text:body
          },
          (error,body)=>{
            console.log(error ? error.message : body)
                }
     )
}

