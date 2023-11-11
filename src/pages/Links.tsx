import React from "react";

import Page from "@/components/Page";
import Section from "@/components/Section";
import Link from "@/components/Link";
import LinkCard from "@/components/LinkCard";

import styles from "./links.module.less";

// Data
import links from "@/data/links.json";

const Links: React.FC = () => {
    return (
        <Page className={"pt-40 "+ styles["page-content"]}>
            <Section title="友情链接" className="pl-[20vw] pr-[20vw] max-lg:pl-[5vw] max-lg:pr-[5vw] max-sm:pl-[40px] max-sm:pr-[40px]">
                <div className="grid grid-cols-3 gap-4 max-md:grid-cols-2 max-sm:grid-cols-1">
                    {
                        links.map((info, index) => <LinkCard {...info} key={index}/>)
                    }
                </div>

                <div className="text-left pt-10 space-y-3">
                    <h2 className="font-semibold">友链说明</h2>
                    <p>如果你也想与我交换友链，敬请发邮件到<Link to="mailto:nriot233@gmail.com">我的邮箱</Link>，我会不定时查看更新的！(我猜不会有什么人来的)</p>
                    <h4 className="font-semibold pt-10">本站点信息</h4>
                    <p>名称: Nriot's Website</p>
                    <p>简介: 由一条咸鱼搭建的网站</p>
                    <p>URL: nin.red</p>
                    <p>颜色: <span className="bg-[--nocp-green]">#077955</span></p>
                </div>
            </Section>
        </Page>
    );
}

export default Links;