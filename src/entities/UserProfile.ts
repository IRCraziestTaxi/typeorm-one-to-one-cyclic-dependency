import { nameof } from "ts-simple-nameof";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class UserProfile {
    @Column({ length: 100, nullable: false, unique: true })
    public email: string;

    @Column({ length: 100, nullable: false })
    public name: string;

    @OneToOne(() => User)
    @JoinColumn({
        name: nameof<UserProfile>(p => p.userId),
        referencedColumnName: nameof<User>(u => u.id)
    })
    public user: User;

    @PrimaryColumn()
    public userId: number;
}
