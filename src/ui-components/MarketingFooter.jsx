/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function MarketingFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MarketingFooter")}
      {...rest}
    >
      <View
        width="1440px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 738")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="22px"
        left="512px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="2011-2023 All right served."
        {...getOverrideProps(overrides, "2011-2023 All right served.")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="22px"
        right="428px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="本网站基于AWS Amplify构建"
        {...getOverrideProps(
          overrides,
          "\u672C\u7F51\u7AD9\u57FA\u4E8EAWS Amplify\u6784\u5EFA"
        )}
      ></Text>
    </View>
  );
}
