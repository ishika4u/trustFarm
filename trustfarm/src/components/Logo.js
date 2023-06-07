import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logo() {
    return (<Link href={"/dashboard"}>
        <div className="flex flex-row gap-[12px]">
            <div>
                <p className="text-center font-poppins">
                    <span className="text-primary font-extrabold text-3xl block">TRUST</span>
                    <span className="text-gray block uppercase font-medium text-xl tracking-widest">FARM</span>
                </p>
            </div>
        </div>
    </Link>);
}
