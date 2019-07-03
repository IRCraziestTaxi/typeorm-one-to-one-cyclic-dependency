import { nameof } from "ts-simple-nameof";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./UserProfile";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(() => UserProfile, { cascade: true, onDelete: "CASCADE" })
    @JoinColumn({ name: nameof<User>(u => u.profileId) })
    public profile: UserProfile;

    @Column({ nullable: false })
    public profileId: number;

    @Column({ length: 100, nullable: false, unique: true })
    public username: string;
}
