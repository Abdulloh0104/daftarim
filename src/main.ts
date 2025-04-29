import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  try {
    const PORT = process.env.PORT || 3030;
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());

    const config = new DocumentBuilder()
      .setTitle("Daftarim project")
      .setDescription("Daftarim REST API")
      .setVersion("1.0")
      .addTag("NestJS", "Validation")
      .addTag("TEST", "Guard")
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup("docs", app, document);

    await app.listen(PORT, () => {
      console.log(`Server is started at: https://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
