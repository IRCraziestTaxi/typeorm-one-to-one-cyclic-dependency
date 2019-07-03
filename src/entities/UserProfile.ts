import { nameof } from "ts-simple-nameof";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class UserProfile {
    @Column({ length: 100, nullable: false, unique: true })
    public email: string;

    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 100, nullable: false })
    public name: string;

    @OneToOne(() => User)
    @JoinColumn({ name: nameof<UserProfile>(p => p.userId) })
    public user: User;

    @Column({ nullable: false })
    public userId: number;
}
