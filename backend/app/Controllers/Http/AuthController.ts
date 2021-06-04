import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class AuthController {
    public async login({ request, auth }: HttpContextContract) {
        const email = request.input("email");
        const password = request.input("password");
        const token = await auth.use("api").attempt(email, password, {
            expiresIn: "1 days",
        });
        return token.toJSON();
    }
    public async register({ request, auth }: HttpContextContract) {
        const email = request.input("email");
        const password = request.input("password");
        const name = request.input("name");
        const newUser = new User();
        newUser.email = email;
        newUser.password = password;
        newUser.name = name;
        await newUser.save();
        const token = await auth.use("api").login(newUser, {
            expiresIn: "1 days",
        });
        return token.toJSON();
    }
    public async index({ }: HttpContextContract) {
        const cads = await User.query().from('users').select('id', 'name', 'email', 'created_at').orderBy('id', 'asc')

        return cads
    }
    public async logout({ auth, response }: HttpContextContract) {
        await auth.use('api').logout()
        response.redirect('/')

        return response
    }
    public async tokenVerify({ params }: HttpContextContract) {
        const token = params.token
        const cads = await User.query().from('api_tokens').select('token').where('token',token)


        if(cads[0]){
            return true
        }

        return false
    }

}