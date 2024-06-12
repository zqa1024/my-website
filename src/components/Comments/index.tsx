import Giscus from "@giscus/react";
import { useColorMode } from "@docusaurus/theme-common";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import logger from "@docusaurus/logger";
import { useLocation } from "@docusaurus/router";
import { useMemo } from "react";
import clsx from "clsx";
import style from './style.module.css';

export default function Comments() {
  const { colorMode, setColorMode } = useColorMode();
  const { i18n, ...rest } = useDocusaurusContext();
  const { currentLocale } = i18n;
  // logger.info( i18n);

  const subPath = useMemo(() => {
    const path = useLocation().pathname.replace(/^\/|\/$/g, "");
    const firstSlashIndex = path.indexOf("/");
    let Path: string = "";
    if (firstSlashIndex !== -1) {
      Path = path.substring(firstSlashIndex + 1);
    } else {
      Path = "index";
    }
    return Path;
  }, []);

  return (
    <div className={`container`} style={{marginTop:70,marginBottom:20}}>
      <Giscus
        id="comments"
        repo="zqa1024/my-website"
        repoId="R_kgDOMFs9zQ"
        category="Announcements"
        categoryId="DIC_kwDOMFs9zc4CgB4e"
        mapping="specific"
        term={subPath}
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        strict="1"
        theme={colorMode === "dark" ? "dark" : "light"}
        lang={currentLocale === "zh-CN" ? "zh-CN" : "en"}
        loading="lazy"
      />
    </div>
  );
}
