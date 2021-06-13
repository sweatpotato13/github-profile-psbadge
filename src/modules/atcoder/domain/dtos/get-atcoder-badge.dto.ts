import { IsString, IsNotEmpty } from "class-validator";

export class GetAtcoderBadgeDto {
    birth: number;

    highest: number;

    match: number;

    @IsNotEmpty()
    @IsNotEmpty()
    rank: number;

    @IsNotEmpty()
    @IsNotEmpty()
    rating: number;

    @IsString()
    @IsNotEmpty()
    user: string;

    win: number;
}
