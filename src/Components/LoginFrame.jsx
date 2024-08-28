import "./../Styles/loginframe.css"

export default function LoginFrame() {
    return(
        <div class="login-main">
            <div class="login">
                <h1>LOGIN</h1>

                <form action="/login" method="post">
                    <div class="form-container">
                        <p class="form-text">E-mail</p>
                        <input class="default-border" type="email" name="email" placeholder="Digite seu e-mail" required/>
                    </div>
                    <div class="form-container">
                        <p class="form-text">Senha</p>
                        <input class="default-border" type="password" name="password" placeholder="Digite sua senha" required/>
                    </div>
                    <a class="form-esqueceusenha">Esqueceu sua senha?</a>
                    <button class="default-border" type="submit">Acessar</button>
                </form>
            </div>
        </div>
    )
}