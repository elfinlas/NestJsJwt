<p align="center">
<img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />
</p>

# Nest.Js Jwt Example Project

[개인 블로그](https://http://elfinlas.github.io)에서 [Nest.js에서 Jwt사용하기](https://elfinlas.github.io/nest_js/230208_nesjs_jwt_part1/) 포스팅 예제입니다.  
자세한 것은 블로그 글을 참고해주세요.

각 커밋마다 블로그 포스팅 내용을 담고 있으며, 완료가 되면 해당 Readme가 업데이트 될 예정입니다.

> 23.02.13 : Part 01 까지 완료

## Jwt 생성 테스트

git을 통해서 해당 프로젝트를 클론합니다.

```
git clone https://github.com/elfinlas/NestJsJwt.git
```

패키지를 설치합니다.  
여기서는 **yarn**을 사용합니다.

```
> yarn install
```

모든 패키지 설치가 끝나면 아래의 명령어로 구동합니다.

```
> yarn dev
```

개발 샘플용이라서 운영환경 및 테스트 로직은 배제되었습니다.

웹에서 다음과 같이 접근합니다.

> http://localhost:5001/auth/jwt

이렇게 하면 JWT가 생성됨을 알 수 있습니다.

자세한 내용은 [Nest.js에서 Jwt사용하기](https://elfinlas.github.io/nest_js/230208_nesjs_jwt_part1/) 포스팅을 참고해주세요.
