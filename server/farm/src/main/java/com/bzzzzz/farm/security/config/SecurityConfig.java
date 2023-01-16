package com.bzzzzz.farm.security.config;

import com.bzzzzz.farm.security.handler.MemberAccessDeniedHandler;
import com.bzzzzz.farm.security.handler.MemberAuthenticationEntryPoint;
import com.bzzzzz.farm.security.jwt.JwtTokenizer;
import com.bzzzzz.farm.security.service.CustomOAuth2MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.filter.CorsFilter;

@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    private final CorsFilter corsFilter;
    private final JwtTokenizer jwtTokenizer;
    private final MemberAuthenticationEntryPoint memberAuthenticationEntryPoint;
    private final MemberAccessDeniedHandler memberAccessDeniedHandler;
    private final CustomOAuth2MemberService customOAuth2MemberService;

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
                .exceptionHandling()
                .authenticationEntryPoint(memberAuthenticationEntryPoint)
                .accessDeniedHandler(memberAccessDeniedHandler)
                .and()
                .headers()
                .frameOptions()
                .sameOrigin()
                .and()
                .addFilter(corsFilter)
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authorizeHttpRequests(authorize -> authorize
//                        .antMatchers(HttpMethod.GET,"/members").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.POST, "/products").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.PATCH, "/products").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/products").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.POST, "**/answers").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.PATCH, "**/answers").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "**/answers").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.POST, "/categories").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.PATCH, "/categories").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.DELETE, "/categories").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.GET,"/orders/**").hasRole("ADMIN")
//                        .antMatchers(HttpMethod.POST, "/signup").permitAll()
//                        .antMatchers(HttpMethod.POST, "/login").permitAll() //추후 적용
                        .anyRequest().permitAll()) //.authenticated() 변경예정
                .apply(new JwtSecurityConfig(jwtTokenizer))
                // OAuth2.0 로그인 설정
                .and()
                .oauth2Login()
                .userInfoEndpoint()
                .userService(customOAuth2MemberService)
                .and()
                .and()
                .logout()
                .disable();
        return http.build();
    }
}
