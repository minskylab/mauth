import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/core";
import { NextPage } from "next";
import React, { FC, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Credentials {
    username: string;
    password: string;
}

interface SignInputProps {
    label: string;
    placeholder: string;
    inputValue?: string;
    onChangeValue?: (val: string) => void;
}

const SignInInput: FC<SignInputProps> = ({ label, placeholder, inputValue, onChangeValue }: SignInputProps) => {
    return (
        <Box my={3}>
            <Text fontSize={"sm"}>{label}</Text>
            <Input placeholder={placeholder} value={inputValue} onChange={(e) => onChangeValue(e.target.value)} />
        </Box>
    );
};

const IndexPage: NextPage = () => {
    const [credentials, setCredentials] = useState<Credentials>({ username: "", password: "" });
    const [loading, setloading] = useState<boolean>(false);

    const signIn = () => {
        console.log(credentials);
        setloading(true);
        axios
            .post("http://localhost:8080/login", credentials)
            .then((res: AxiosResponse) => {
                // console.log(res);
                const token = res.data.token;
                localStorage.setItem("token", token);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setloading(false);
            });
    };

    return (
        <Center w="100vw" h="100vh" position="absolute" top={0} left={0}>
            <Flex
                px={6}
                py={8}
                w={1 / 4}
                minWidth={"320px"}
                bg={"gray.50"}
                direction={"column"}
                justifyContent={"space-between"}
                borderRadius="md"
            >
                <Text fontSize={"3xl"} mb={6}>
                    Sign In
                </Text>

                <Box>
                    <SignInInput
                        label={"Username"}
                        placeholder={"Ingrese su username"}
                        inputValue={credentials.username}
                        onChangeValue={(u: string) => setCredentials({ username: u, password: credentials.password })}
                    />
                    <SignInInput
                        label={"Contraseña"}
                        placeholder={"Ingrese su contraseña"}
                        inputValue={credentials.password}
                        onChangeValue={(p: string) => setCredentials({ username: credentials.username, password: p })}
                    />
                </Box>

                <Button mt={2} bg={"orange.300"} isLoading={loading} loadingText="Enviando" onClick={signIn}>
                    Ingresar
                </Button>
            </Flex>
        </Center>
    );
};

export default IndexPage;
