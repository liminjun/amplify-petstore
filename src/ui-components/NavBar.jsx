/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuth } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function NavBar(props) {
  const { overrides, ...rest } = props;
  const authAttributes = useAuth().user?.attributes ?? {};
  return (
    <View
      width="1024px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(97,218,251,1)"
      {...getOverrideProps(overrides, "NavBar")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="row"
        width="62px"
        height="26px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="18px"
        left="50px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 32129767076")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Add Pet"
          {...getOverrideProps(overrides, "Add Pet")}
        ></Text>
      </Flex>
      <Flex
        gap="40px"
        direction="row"
        width="62px"
        height="26px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="18px"
        left="925px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 322")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
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
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={authAttributes["name"]}
          {...getOverrideProps(overrides, "UserName")}
        ></Text>
      </Flex>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="8px"
        left="722px"
        size="large"
        isDisabled={false}
        variation="link"
        children="Logout"
        {...getOverrideProps(overrides, "btnLogin")}
      ></Button>
      <Flex
        gap="32px"
        direction="row"
        width="106px"
        height="69px"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
        top="0px"
        left="773px"
        padding="0px 0px 0px 486px"
        {...getOverrideProps(overrides, "Frame 32129767081")}
      >
        <Image
          width="45px"
          height="45px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          borderRadius="160px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://ecloud.eos-guangzhou-1.cmecloud.cn/op-node-portal-web/static/images/home/hot-new/hot-recommend.png"
          {...getOverrideProps(overrides, "image")}
        ></Image>
      </Flex>
    </View>
  );
}
