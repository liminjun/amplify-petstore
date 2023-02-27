/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Pet } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProfileCardOverridesProps = {
    ProfileCard?: PrimitiveOverrideProps<FlexProps>;
    Button36492689?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "Design Engineer at Cloth Studios"?: PrimitiveOverrideProps<TextProps>;
    Followers?: PrimitiveOverrideProps<FlexProps>;
    MyIcon?: MyIconProps;
    "99 Followers"?: PrimitiveOverrideProps<TextProps>;
    Button29766907?: PrimitiveOverrideProps<ButtonProps>;
    Button36492693?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ProfileCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    pet?: Pet;
} & {
    overrides?: ProfileCardOverridesProps | undefined | null;
}>;
export default function ProfileCard(props: ProfileCardProps): React.ReactElement;
