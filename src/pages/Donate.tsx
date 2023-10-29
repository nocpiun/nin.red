import React from "react";

import Page from "@/components/Page";
import ContentCard from "@/components/ContentCard";

import styles from "./donate.module.less";

import DonateQRCode from "@/static/donate.png";

const Donate: React.FC = () => {
    return (
        <Page className={"pt-40 "+ styles["page-content"]}>
            <ContentCard title="打赏">
                <p>打赏能给予我创造和开发的动力，如果你对我的项目感到满意，欢迎打赏！</p>

                <img className="mt-14 ml-auto mr-auto w-96" src={DonateQRCode} alt="donate"/>
            </ContentCard>
        </Page>
    );
}

export default Donate;