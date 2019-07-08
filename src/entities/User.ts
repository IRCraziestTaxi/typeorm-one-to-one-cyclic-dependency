import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserProfile } from "./UserProfile";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @OneToOne(() => UserProfile, { cascade: true, onDelete: "CASCADE" })
    public profile: UserProfile;

    @Column({ length: 100, nullable: false, unique: true })
    public username: string;
}
