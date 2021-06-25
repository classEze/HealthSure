import * as yup from 'yup'
const validationSchema = yup.object().shape(
     { password: yup.string()
          .min(8, 'password must be at least 8 characters long')
          .matches(/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,40})/, 'password must contain at least one uppercase letter,one digit and one special character'),

     confirm: yup.string().when("password", {
               is: val => (val && val.length > 0 ? true : false),
               then: yup.string().oneOf(
                 [yup.ref("password")],
                 " Both passwords do not match"
               )
             }),
      phone:yup.string().matches(/^\+234[\d]{10}$/, "please input a valid mobile number e.g +2348138983290")
     }
)
export default validationSchema