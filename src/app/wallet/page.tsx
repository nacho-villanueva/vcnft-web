'use client'
import {Card, CardHeader, CardBody, CardFooter, Divider, Button} from "@nextui-org/react";
import {vcnftApi} from "@/utils/Axios";
import {useDID} from "@/hooks/UseDID";
import {ethers, JsonRpcSigner} from "ethers";
import {useEffect, useState} from "react";
const provider = new ethers.BrowserProvider(window.ethereum)

export default function WalletPage() {

    const {dids, addDID} = useDID()

    const query = new URLSearchParams(window.location.search);

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [defaultAccount, setDefaultAccount] = useState<string | null>(null);
    const [userBalance, setUserBalance] = useState<string | null>(null);

    useEffect(() => {
        if (query.has("challenge")) {
            if (window.ethereum) {
                provider.getSigner().then(async (signer) => {
                    signer.signMessage(query.get("challenge") as string).then((signature) => {
                        vcnftApi.post("/holder/challenge", {
                            challenge: {
                                message: query.get("challenge") as string,
                                signature: signature
                            }
                        })
                    })
                })
            }
        }
    })

    const connectWalletHandler = () => {
        if (window.ethereum) {
            provider.send("eth_requestAccounts", []).then(async () => {
                await accountChangedHandler(await provider.getSigner());
            })
        } else {
            console.log("Please Install Metamask!!!")
            setErrorMessage("Please Install Metamask!!!");
        }
    }
    const accountChangedHandler = async (newAccount: JsonRpcSigner) => {
        const address = await newAccount.getAddress();
        setDefaultAccount(address);
    }

    const createIdentity = () => {
        vcnftApi.get('/identity/create').then(
            (response) => {
                addDID(response.data);
            }
        );
    }

    return (
        <div className={"flex justify-center items-center flex-1"}>
            <Card className="w-full max-w-[600px]">
                <CardHeader className="flex gap-3">
                    <div className="flex flex-col">
                        <h1>VCNFT Car Registry Wallet </h1>
                    </div>
                </CardHeader>
                <Divider/>
                <CardBody>
                    <h2 className="text-sm">
                        Create a new identity
                    </h2>
                    <Button variant={"bordered"} onClick={createIdentity}> Create </Button>
                    <Divider className={"my-4"}/>
                    <h2 className="text-sm">
                        Import an existing identity
                    </h2>
                    <Button variant={"bordered"}> Import </Button>
                    <Divider className={"my-4"}/>
                    <h2 className="text-sm">
                        Add Blockchain Wallet
                    </h2>
                    <Button variant={"bordered"} onClick={connectWalletHandler}> Connect Wallet </Button>
                </CardBody>
                <Divider />
                <CardFooter className="flex flex-col">
                    <h2>Imported DIDs</h2>
                    <ul className="w-full">
                        {dids.map((did) => {
                                return (
                                    <li key={did.longDid} className={"w-full truncate"}>
                                        {did.longDid}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </CardFooter>
            </Card>
        </div>
    )
}