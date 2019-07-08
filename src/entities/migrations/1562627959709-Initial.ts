import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1562627959709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user_profile" ("email" character varying(100) NOT NULL, "name" character varying(100) NOT NULL, "userId" integer NOT NULL, CONSTRAINT "UQ_e336cc51b61c40b1b1731308aa5" UNIQUE ("email"), CONSTRAINT "REL_51cb79b5555effaf7d69ba1cff" UNIQUE ("userId"), CONSTRAINT "PK_51cb79b5555effaf7d69ba1cff9" PRIMARY KEY ("userId"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "username" character varying(100) NOT NULL, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user_profile" ADD CONSTRAINT "FK_51cb79b5555effaf7d69ba1cff9" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user_profile" DROP CONSTRAINT "FK_51cb79b5555effaf7d69ba1cff9"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "user_profile"`);
    }

}
