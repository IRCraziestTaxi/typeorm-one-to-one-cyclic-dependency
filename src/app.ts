import { ConnectionOptions, createConnection } from "typeorm";
import { LinqRepository } from "typeorm-linq-repository";
import * as dbConfig from "../ormconfig.json";
import { User } from "./entities/User";
import { UserProfile } from "./entities/UserProfile";

async function main(): Promise<void> {
    const profile = new UserProfile();
    profile.email = `${Date.now()}@ex.com`;
    profile.name = "John Doe";

    const user = new User();
    user.profile = profile;
    user.username = `user${Date.now()}`;

    const createdUser = await new LinqRepository(User).create(user);

    console.log(createdUser);
}

const dbOptions = dbConfig[0] as ConnectionOptions;

createConnection(dbOptions)
    .then(() => {
        return main();
    })
    .catch((error: any) => {
        console.error(error);
    });
