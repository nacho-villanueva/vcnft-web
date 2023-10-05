'use client'
import {Card, CardHeader, CardBody, CardFooter, Divider, Button} from "@nextui-org/react";
import {vcnftApi} from "@/utils/Axios";
import {useDID} from "@/hooks/UseDID";

export default function WalletPage() {

    const {dids, addDID} = useDID()

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