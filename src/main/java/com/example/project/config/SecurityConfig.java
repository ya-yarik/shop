package com.example.project.config;

import com.example.project.services.UsersDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig{
    private final UsersDetailsService usersDetailsService;

    //хеширование пароля

    @Bean
    public PasswordEncoder getPasswordEncode(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // конфигурируем работу Spring Security
//.csrf().disable() // отключаем защиту от межсайтовой подделки запросов
        http
                .csrf().disable()
                .authorizeHttpRequests() // указываем что все страницы должны быть защищены аутентификацией
                .requestMatchers("/admin").hasRole("ADMIN") // указываем на то что страница /admin доступна пользователю с ролью ADMIN
                // указываем что не аутентифицированные пользователя могут зайти на страницу аутентификации и на объект ошибки
                // c помощью permitAll указываем что не аутентифицированные пользователи могут заходить на перечисленные страницы
                // указываем что для всех остальных страниц необходимо вызывать метод authenticated(), который открывает форму аутентификации
//                .anyRequest().authenticated()
                .requestMatchers("/auth", "/aboutus", "/requisites", "/feedback", "/vacancies", "/pickup", "/makeorder", "/payment", "/delivery", "/return", "/rules", "/experiment", "/index/**", "/main", "/", "/product/**", "/process_login", "/auth?error", "logout", "/registration/**", "/error", "/resources/**", "/static/**", "/css/**", "/js/**", "/img/**").permitAll()
                .anyRequest().hasAnyRole("USER", "ADMIN")
                .and() // указываем что дальше настраиватеся аутентификация и соединяем ее с настройкой доступа
                .formLogin().loginPage("/auth") // указываем какой url запрос будет отправлятся при заходе на защищенные страницы
                .loginProcessingUrl("/process_login") // указываем на какой адрес будут отправляться данные с формы. Нам уже не нужно будет создавать метод в контроллере и обрабатывать данные с формы. Мы задали url, который используется по умолчанию для обработки формы аутентификации по средствам Spring Security. Spring Security будет ждать объект с формы аутентификации и затем сверять логин и пароль с данными в БД
                .defaultSuccessUrl("/profile", true) // Указываем на какой url необходимо направить пользователя после успешной аутентификации. Вторым аргументом указывается true чтобы перенаправление шло в любом случае послу успешной аутентификации
                .failureUrl("/auth?error") // Указываем куда необходимо перенаправить пользователя при проваленной аутентификации. В запрос будет передан объект error, который будет проверятся на форме и при наличии данного объекта в запросе выводится сообщение "Неправильный логин или пароль"
                .and()
                .logout().logoutUrl("/logout").logoutSuccessUrl("/");
        return http.build();
    }

    @Autowired
    public SecurityConfig(UsersDetailsService usersDetailsService) {
        this.usersDetailsService = usersDetailsService;
    }



    protected void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(usersDetailsService)
                .passwordEncoder(getPasswordEncode());
    }
}