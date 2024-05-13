"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../../../../../lib/index";
import Hero from "@/components/Hero";
import ManufacturingArticles from "@/components/ManufacturingArticles";
import Carousel from "@/components/Carousel";
import TextCTA from "@/components/TextCTA";

export default function Manufacturing() {
  const [entry, setEntry] = useState({});
  const [loading, SetLoading] = useState(true);

  const getContent = async () => {
    const entry = await Stack.getElementWithRefs(
      "blt9d848096e023078f",
      "homepage",
      ["content.articles.card.article"]
    );

    // console.log("homepage:", entry);
    setEntry(entry);
    SetLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  if (loading) {
    return;
  }

  console.log(entry);

  return (
    <>
      <meta charSet="UTF-8" />
      <title>Manufacturing | Honeywell</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Discover and optimize hidden costs and inefficiencies in your manufacturing processes, from supply chain to product delivery, with our digital insights."
      />
      <meta name="template" content="content-page-template" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Manufacturing | Honeywell" />
      <meta
        property="og:image"
        content="https://www.honeywell.com/content/dam/honeywell-edam/sps/common/en-us/homepage/sps-his-automotive-manufacturing-homepage-banner.png"
      />
      <meta
        name="og:description"
        content="Discover and optimize hidden costs and inefficiencies in your manufacturing processes, from supply chain to product delivery, with our digital insights."
      />
      <meta
        property="og:url"
        content="https://www.honeywell.com/us/en/industries/manufacturing"
      />
      <meta
        name="google-site-verification"
        content="ayM9HIZ7viBmCXwPwPqbbjOcc8CPekoQ2T9p2yKRk08"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/etc.clientlibs/baseline-tenant/clientlibs/clientlib-general/resources/icons/favicon.ico"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        @media (max-width: 767px) {\n.cta--tertiary a, .cta--tertiary span { text-align: left !important; } }\n@media (min-width: 767px) {\nbody > main > div > div > div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12 > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div:nth-child(2) > div > a > div.tile-grid-streach-image-light-grey-boxshadow > div.tile-grid-title {padding-bottom: 35px;} }\n@media (min-width: 1390px) {\nbody > main > div > div > div.responsivegrid.aem-GridColumn.aem-GridColumn--default--12 > div > div:nth-child(3) > div > div:nth-child(2) > div > div > div > div:nth-child(3) > div > a > div.tile-grid-streach-image-light-grey-boxshadow > div.tile-grid-title\n{padding-bottom: 35px;} }\n/*\n@media only screen and (min-width: 1100px) and (max-width: 1600px) {\n.static-content-carousel-left-v2 .default-carousel--container .proxy-slick-buttons {left: 55% !important; bottom: 5% !important;}\n}\n\n@media (min-width: 1200px) {.static-content-carousel-left-v2 .default-carousel--container .proxy-slick-buttons {bottom: 10% !important;}}\n@media (min-width: 1025px) {.static-content-carousel-left-v2 .slide .slide__content-wrapper {margin-top: 30px !important; margin-bottom: 30px !important; justify-content: flex-start !important;}}\n*/\n.slide__content-wrapper {justify-content: flex-start !important;}\n    ",
        }}
      />
   
      <main>
        <div className="root responsivegrid">
          <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
            <div className="localized-experiencefragment experiencefragment aem-GridColumn aem-GridColumn--default--12">
              <div className="cmp-experiencefragment cmp-experiencefragment--header">
                <div className="xf-content-height">
                  <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                    <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        <div className="header aem-GridColumn aem-GridColumn--default--12">
                          <input type="hidden" id="buyer_access_toolId" />
                          <div className="global-header-toplinks navigationV2 ">
                            <div className="header-links-topline top-quick-links d-flex justify-content-end">
                              <ul className="d-flex list-unstyled">
                                <input
                                  type="hidden"
                                  defaultValue="true"
                                  className="enableRedirectCLS"
                                  name="enableRedirectCLS"
                                />
                                <li
                                  className="icon header-country-icon header-country-clsType"
                                  data-clstype="flyOutCLSV2"
                                >
                                  <a
                                    className="countryLangFlyout"
                                    href=""
                                    data-locale-current="us/en"
                                  >
                                    <img
                                      src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/global/hon-globe-15px.png"
                                      alt="icon"
                                    />
                                    <span className="countryName">USA(EN)</span>
                                  </a>
                                  <div className="cmp-cls-v2-flyOut">
                                    <div className="cmp-cls-v2">
                                      <ul className="cmp-cls-v2__close">
                                        <li
                                          className="cls-mobile-close"
                                          style={{ display: "none" }}
                                        >
                                          <button
                                            className="cls-mobile-close-button icon icon-close"
                                            aria-label="Close Flyout "
                                          />
                                        </li>
                                      </ul>
                                      <div>
                                        <div className="cmp-cls-v2__header">
                                          <span className="cmp-cls-v2__heading">
                                            Global
                                          </span>
                                        </div>
                                        <div className="cmp-cls-v2__searchbar">
                                          <button
                                            type="submit"
                                            className="cmp-cls-v2__searchbar-icon icon-search"
                                          />
                                          <input
                                            className="cmp-cls-v2__searchbar-input"
                                            autoComplete="off"
                                            id="clsV2ListSearch"
                                            type="text"
                                            placeholder="Search a country"
                                          />
                                          <span className="cmp-cls-v2__searchbar-input-close-button icon-close"></span>
                                        </div>
                                        <ul className="cmp-cls-v2__regions">
                                          <li className="cmp-cls-v2__region">
                                            <p className="cmp-cls-v2__region-title">
                                              Africa
                                              <span className="add-down-chevron"></span>
                                            </p>
                                            <section className="cmp-cls-v2__region-country">
                                              <ul>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="dz-en"
                                                      data-locale-path="dz/en"
                                                      data-locale="ALGERIA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/dz/en"
                                                        target="_self"
                                                      >
                                                        Algeria - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ao-en"
                                                      data-locale-path="ao/en"
                                                      data-locale="ANGOLA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ao/en"
                                                        target="_self"
                                                      >
                                                        Angola - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ke-en"
                                                      data-locale-path="ke/en"
                                                      data-locale="KENYA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ke/en"
                                                        target="_self"
                                                      >
                                                        Kenya - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ma-fr"
                                                      data-locale-path="ma/fr"
                                                      data-locale="MOROCCO(FR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ma/fr"
                                                        target="_self"
                                                      >
                                                        Morocco - French{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ng-en"
                                                      data-locale-path="ng/en"
                                                      data-locale="NIGERIA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ng/en"
                                                        target="_self"
                                                      >
                                                        Nigeria - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="za-en"
                                                      data-locale-path="za/en"
                                                      data-locale="SOUTH AFRICA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/za/en"
                                                        target="_self"
                                                      >
                                                        South Africa - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li style={{ display: "none" }}>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="tn-fr"
                                                      data-locale-path="tn/fr"
                                                      data-locale="TUNISIA(FR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/tn/fr"
                                                        target="_self"
                                                      >
                                                        Tunisia - French{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </section>
                                          </li>
                                          <li className="cmp-cls-v2__region">
                                            <p className="cmp-cls-v2__region-title">
                                              Asia Pacific
                                              <span className="add-down-chevron"></span>
                                            </p>
                                            <section className="cmp-cls-v2__region-country">
                                              <ul>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="au-en"
                                                      data-locale-path="au/en"
                                                      data-locale="AUSTRALIA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/au/en"
                                                        target="_self"
                                                      >
                                                        Australia - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="cn-zh"
                                                      data-locale-path="cn/zh"
                                                      data-locale="CHINA(ZH)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="https://www.honeywell.com.cn/cn/zh"
                                                        target="_blank"
                                                      >
                                                        China - Chinese{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="in-en"
                                                      data-locale-path="in/en"
                                                      data-locale="INDIA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/in/en"
                                                        target="_self"
                                                      >
                                                        India - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="id-id"
                                                      data-locale-path="id/id"
                                                      data-locale="INDONESIA(ID)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/id/id"
                                                        target="_self"
                                                      >
                                                        Indonesia - Indonesian
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="jp-ja"
                                                      data-locale-path="jp/ja"
                                                      data-locale="JAPAN(JA)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/jp/ja"
                                                        target="_self"
                                                      >
                                                        Japan - Japanese
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="my-en"
                                                      data-locale-path="my/en"
                                                      data-locale="MALAYSIA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/my/en"
                                                        target="_self"
                                                      >
                                                        Malaysia - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="kr-ko"
                                                      data-locale-path="kr/ko"
                                                      data-locale="REPUBLIC OF KOREA(KO)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/kr/ko"
                                                        target="_self"
                                                      >
                                                        Republic of Korea -
                                                        Korean
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ph-en"
                                                      data-locale-path="ph/en"
                                                      data-locale="PHILIPPINES(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ph/en"
                                                        target="_self"
                                                      >
                                                        Philippines - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="th-en"
                                                      data-locale-path="th/en"
                                                      data-locale="THAILAND(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/th/en"
                                                        target="_self"
                                                      >
                                                        Thailand - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li style={{ display: "none" }}>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="vn-vi"
                                                      data-locale-path="vn/vi"
                                                      data-locale="VIETNAM(VI)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/vn/vi"
                                                        target="_self"
                                                      >
                                                        Vietnam - Vietnamese
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </section>
                                          </li>
                                          <li className="cmp-cls-v2__region">
                                            <p className="cmp-cls-v2__region-title">
                                              Europe
                                              <span className="add-down-chevron"></span>
                                            </p>
                                            <section className="cmp-cls-v2__region-country">
                                              <ul>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="at-de"
                                                      data-locale-path="at/de"
                                                      data-locale="AUSTRIA(DE)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/at/de"
                                                        target="_self"
                                                      >
                                                        Austria - German
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="be-fr"
                                                      data-locale-path="be/fr"
                                                      data-locale="BELGIUM(FR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/be/fr"
                                                        target="_self"
                                                      >
                                                        Belgium - French{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="be-nl"
                                                      data-locale-path="be/nl"
                                                      data-locale="BELGIUM(NL)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/be/nl"
                                                        target="_self"
                                                      >
                                                        Belgium - Dutch
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="bg-bg"
                                                      data-locale-path="bg/bg"
                                                      data-locale="BULGARIA(BG)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/bg/bg"
                                                        target="_self"
                                                      >
                                                        Bulgaria - Bulgarian
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="cz-en"
                                                      data-locale-path="cz/en"
                                                      data-locale="CZECH REPUBLIC(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/cz/en"
                                                        target="_self"
                                                      >
                                                        Czech Republic - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="dk-da"
                                                      data-locale-path="dk/da"
                                                      data-locale="DENMARK(DA)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/dk/da"
                                                        target="_self"
                                                      >
                                                        Denmark - Danish
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="fi-fi"
                                                      data-locale-path="fi/fi"
                                                      data-locale="FINLAND(FI)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/fi/fi"
                                                        target="_self"
                                                      >
                                                        Finland - Finnish
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="fr-fr"
                                                      data-locale-path="fr/fr"
                                                      data-locale="FRANCE(FR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/fr/fr"
                                                        target="_self"
                                                      >
                                                        France - French{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="de-de"
                                                      data-locale-path="de/de"
                                                      data-locale="GERMANY(DE)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/de/de"
                                                        target="_self"
                                                      >
                                                        Germany - German
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="hu-hu"
                                                      data-locale-path="hu/hu"
                                                      data-locale="HUNGARY(HU)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/hu/hu"
                                                        target="_self"
                                                      >
                                                        Hungary - Hungarian
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="it-it"
                                                      data-locale-path="it/it"
                                                      data-locale="ITALY(IT)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/it/it"
                                                        target="_self"
                                                      >
                                                        Italy - Italian
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="nl-nl"
                                                      data-locale-path="be/nl"
                                                      data-locale="NETHERLANDS(NL)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/be/nl"
                                                        target="_self"
                                                      >
                                                        Netherlands - Dutch
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="no-no"
                                                      data-locale-path="no/nb"
                                                      data-locale="NORWAY(NO)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/no/nb"
                                                        target="_self"
                                                      >
                                                        Norway - Norwegian
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="pl-pl"
                                                      data-locale-path="pl/pl"
                                                      data-locale="POLAND(PL)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/pl/pl"
                                                        target="_self"
                                                      >
                                                        Poland - Polish
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ro-en"
                                                      data-locale-path="ro/en"
                                                      data-locale="ROMANIA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ro/en"
                                                        target="_self"
                                                      >
                                                        Romania - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="sk-sk"
                                                      data-locale-path="sk/sk"
                                                      data-locale="SLOVAKIA(SK)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/sk/sk"
                                                        target="_self"
                                                      >
                                                        Slovakia - Slovak
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ch-fr"
                                                      data-locale-path="ch/fr"
                                                      data-locale="SWITZERLAND(FR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ch/fr"
                                                        target="_self"
                                                      >
                                                        Switzerland - French{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ch-de"
                                                      data-locale-path="ch/de"
                                                      data-locale="SWITZERLAND(DE)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ch/de"
                                                        target="_self"
                                                      >
                                                        Switzerland - German
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="tr-tr"
                                                      data-locale-path="tr/tr"
                                                      data-locale="TURKEY(TR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/tr/tr"
                                                        target="_self"
                                                      >
                                                        Turkey - Turkish
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li style={{ display: "none" }}>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="gb-en"
                                                      data-locale-path="gb/en"
                                                      data-locale="UK(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/gb/en"
                                                        target="_self"
                                                      >
                                                        United Kingdom - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </section>
                                          </li>
                                          <li className="cmp-cls-v2__region">
                                            <p className="cmp-cls-v2__region-title">
                                              Latin America
                                              <span className="add-down-chevron"></span>
                                            </p>
                                            <section className="cmp-cls-v2__region-country">
                                              <ul>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="br-pt"
                                                      data-locale-path="br/pt"
                                                      data-locale="BRAZIL(PT)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/br/pt"
                                                        target="_self"
                                                      >
                                                        Brazil - Portuguese{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li style={{ display: "none" }}>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="mx-es"
                                                      data-locale-path="mx/es"
                                                      data-locale="MEXICO(ES)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/mx/es"
                                                        target="_self"
                                                      >
                                                        Mexico - Spanish{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </section>
                                          </li>
                                          <li className="cmp-cls-v2__region">
                                            <p className="cmp-cls-v2__region-title">
                                              Middle East
                                              <span className="add-down-chevron"></span>
                                            </p>
                                            <section className="cmp-cls-v2__region-country">
                                              <ul>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="eg-en"
                                                      data-locale-path="eg/en"
                                                      data-locale="EGYPT(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/eg/en"
                                                        target="_self"
                                                      >
                                                        Egypt - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="iq-en"
                                                      data-locale-path="ae/en"
                                                      data-locale="IRAQ(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ae/en"
                                                        target="_self"
                                                      >
                                                        Iraq - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="kw-en"
                                                      data-locale-path="ae/en"
                                                      data-locale="KUWAIT(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ae/en"
                                                        target="_self"
                                                      >
                                                        Kuwait - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="om-en"
                                                      data-locale-path="ae/en"
                                                      data-locale="OMAN(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ae/en"
                                                        target="_self"
                                                      >
                                                        Oman - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="qa-en"
                                                      data-locale-path="ae/en"
                                                      data-locale="QATAR(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ae/en"
                                                        target="_self"
                                                      >
                                                        Qatar - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="sa-ar"
                                                      data-locale-path="sa/ar"
                                                      data-locale="SAUDI ARABIA(AR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/sa/ar"
                                                        target="_self"
                                                      >
                                                        Saudi Arabia - Arabic
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="sa-en"
                                                      data-locale-path="sa/en"
                                                      data-locale="SAUDI ARABIA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/sa/en"
                                                        target="_self"
                                                      >
                                                        Saudi Arabia - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ae-ar"
                                                      data-locale-path="ae/ar"
                                                      data-locale="UAE(AR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ae/ar"
                                                        target="_self"
                                                      >
                                                        United Arab Emirates -
                                                        Arabic
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li style={{ display: "none" }}>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ae-en"
                                                      data-locale-path="ae/en"
                                                      data-locale="UAE(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ae/en"
                                                        target="_self"
                                                      >
                                                        United Arab Emirates -
                                                        English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </section>
                                          </li>
                                          <li
                                            className="cmp-cls-v2__region"
                                            style={{ display: "none" }}
                                          >
                                            <p className="cmp-cls-v2__region-title">
                                              North America
                                              <span className="add-down-chevron"></span>
                                            </p>
                                            <section className="cmp-cls-v2__region-country">
                                              <ul>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ca-en"
                                                      data-locale-path="ca/en"
                                                      data-locale="CANADA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ca/en"
                                                        target="_self"
                                                      >
                                                        Canada - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="ca-fr"
                                                      data-locale-path="ca/fr"
                                                      data-locale="CANADA(FR)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/ca/fr"
                                                        target="_self"
                                                      >
                                                        Canada - French{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                                <li style={{ display: "none" }}>
                                                  <ul className="cmp-cls-v2__languageList">
                                                    <li
                                                      className="cmp-cls-v2__languageList-items"
                                                      data-country-language-code="us-en"
                                                      data-locale-path="us/en"
                                                      data-locale="USA(EN)"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        className="cmp-cls-v2__languageList-items-link"
                                                        href="/us/en"
                                                        target="_self"
                                                      >
                                                        United States - English{" "}
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </li>
                                              </ul>
                                            </section>
                                          </li>
                                        </ul>
                                        <section className="cmp-cls-v2__search">
                                          <ul className="cmp-cls-v2__search-list"></ul>
                                        </section>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                                <li>|</li>
                                <li className="header-links-topline__sbglinks">
                                  <a
                                    className="header-links-topline__sbglinks-heading"
                                    href=""
                                  >
                                    <span className="header-links-topline__sbglinks-heading-title">
                                      BUSINESSES
                                    </span>
                                    <span className="go-to-sbg-links" />
                                  </a>
                                  <div className="header-sbg-links-section">
                                    <div className="mobile-back-sbg-heading">
                                      <span className="icon icon-carat_left go-back-sbg-link" />
                                      BUSINESSES
                                    </div>
                                    <ul className="header-links-topline__sbglinks-list">
                                      <li className="header-links-topline__sbglink">
                                        <a
                                          href="https://aerospace.honeywell.com/us/en"
                                          target="_blank"
                                        >
                                          <span className="header-links-topline__sbglink-text align-middle">
                                            Aerospace Technologies
                                          </span>
                                          <span className="header-links-topline__sbglink-icon" />
                                        </a>
                                      </li>
                                      <li className="header-links-topline__sbglink">
                                        <a
                                          href="https://automation.honeywell.com/us/en"
                                          target="_blank"
                                        >
                                          <span className="header-links-topline__sbglink-text align-middle">
                                            Industrial Automation
                                          </span>
                                          <span className="header-links-topline__sbglink-icon" />
                                        </a>
                                      </li>
                                      <li className="header-links-topline__sbglink">
                                        <a
                                          href="https://buildings.honeywell.com/us/en"
                                          target="_blank"
                                        >
                                          <span className="header-links-topline__sbglink-text align-middle">
                                            Building Automation
                                          </span>
                                          <span className="header-links-topline__sbglink-icon" />
                                        </a>
                                      </li>
                                      <li className="header-links-topline__sbglink">
                                        <a
                                          href="https://ess.honeywell.com/us/en"
                                          target="_blank"
                                        >
                                          <span className="header-links-topline__sbglink-text align-middle">
                                            Energy And Sustainability Solutions
                                          </span>
                                          <span className="header-links-topline__sbglink-icon" />
                                        </a>
                                      </li>
                                      <li
                                        className="header-links-topline__sbglink"
                                        style={{ display: "none" }}
                                      >
                                        <a
                                          href="https://www.honeywellforge.ai/"
                                          target="_blank"
                                        >
                                          <span className="header-links-topline__sbglink-text align-middle">
                                            Honeywell Forge
                                          </span>
                                          <span className="header-links-topline__sbglink-icon" />
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                                <li>|</li>
                                <li>
                                  <a href="/us/en/contact" target="_self">
                                    Contact
                                  </a>
                                </li>
                                <li style={{ display: "none" }}>|</li>
                              </ul>
                            </div>
                            <ul className="d-flex list-unstyled nav-gdm"></ul>
                          </div>
                          <div
                            className="modal-backdrop loading-backdrop  js-loading-modal"
                            style={{ display: "none" }}
                          >
                            <div className="loading" />
                          </div>
                          <div className="background-overlay" />
                          <header className="global-header navigationV2 aem-Grid aem-Grid--12 search-bar-takeover-global-header">
                            <div className="global-header-container aem-GridColumn">
                              <button className="mobile-menu-button icon-hamburger mobile-hamburger" />
                              <div className="logo-container">
                                <a
                                  href="https://www.honeywell.com/us/en"
                                  className="logo-link m-0"
                                >
                                  <img
                                    src="https://honeywell.com/content/dam/honeywellbt/en/images/logos/HON%20logo_200x37%202.png"
                                    width={175}
                                    height={175}
                                    alt="Honeywell"
                                  />
                                </a>
                              </div>
                              <div className="nav-container">
                                <div
                                  className="navigation-v2-container"
                                  id="navigationV2Container"
                                >
                                  <div className="navigationv2 navigation">
                                    <div className="cmp-navigation-v2">
                                      <ul className="navigation__close mobile-hide">
                                        <li className="mobile-close">
                                          <button
                                            className="mobile-close-button icon icon-close"
                                            aria-label="Close Navigation"
                                          >
                                            Close
                                          </button>
                                        </li>
                                      </ul>
                                      <div
                                        className="primary-navigation-v2"
                                        data-redirect-page="/content/honeywellbt/us/en.html"
                                        aria-label="Industries"
                                      >
                                        <div
                                          className="standard-flyout"
                                          id="standard-flyout-nav"
                                        >
                                          <ul className="cmp-navigation-v2__nav-level-1  ">
                                            <li
                                              className="cmp-navigation-v2__item standard-primary-nav-item primary-nav-item"
                                              data-redirect="false"
                                              data-locale="en_us"
                                            >
                                              <a
                                                href=""
                                                className="cmp-navigation-v2__item-link primary-nav navlink "
                                              >
                                                Industries
                                              </a>
                                              <span className="icon icon-carat_right go-to-subnav" />
                                              <nav
                                                className="secondary-navigation-v2"
                                                role="navigation"
                                              >
                                                <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                                                  <div className="aem-GridColumn aem-GridColumn--default--12 mobile-fullscreen">
                                                    <div className="mobile-back nav-title-primary">
                                                      <span className="icon icon-carat_left go-to-prevnav" />
                                                      Industries
                                                    </div>
                                                    <ul className="lazy-entry cmp-navigation-v2__nav-level-2">
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/overview"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/products-and-solutions/Overview_Nav_Products%20and%20Solutions.svg"
                                                              alt="Honeywell Verticals"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            What We Do
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/products"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/aerobt/en/images/icons/navigation/AeroBT-Aerospace_Products.svg"
                                                              alt="Honeywell Products"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Our Products
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/aerospace"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/products-and-solutions/Aerospace_Nav_Products%20and%20Solutions.svg"
                                                              alt="Aerospace"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Aerospace
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/buildings-cities"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/products-and-solutions/Buildings%20and%20Cities_Nav_Products%20and%20Solutions.svg"
                                                              alt="Building Technologies"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Commercial Buildings
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/energy"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/industry/renewable-fuels.svg"
                                                              alt="Energy"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Energy
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/healthcare"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/products-and-solutions/Healthcare%20and%20Pharma_Nav_Products%20and%20Solutions-New.svg"
                                                              alt="Healthcare"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Healthcare
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/high-tech"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/Industrial-Software.svg"
                                                              alt="Honeywell Forge"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            IT/High-Tech
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/life-sciences"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/industry/life-sciences-1.svg"
                                                              alt="Life Sciences"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Life Sciences
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/supply-chain"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/products-and-solutions/Supply%20Chain_Nav_Products%20and%20Solutions.svg"
                                                              alt="Logistics and Warehouses"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Logistics and
                                                            Warehouses
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/manufacturing"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/industry/manufacturing.svg"
                                                              alt="Manufacturing"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Manufacturing
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/retail"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/products-and-solutions/Retail_Nav_Products%20and%20Solutions.svg"
                                                              alt="Retail"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Retail
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/industries/utilities"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/industry/utilities.svg"
                                                              alt="Utilities"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Utilities
                                                          </span>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </nav>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div
                                        className="primary-navigation-v2"
                                        data-redirect-page="/content/honeywellbt/us/en.html"
                                        aria-label="Company"
                                      >
                                        <div
                                          className="standard-flyout"
                                          id="standard-flyout-nav"
                                        >
                                          <ul className="cmp-navigation-v2__nav-level-1  ">
                                            <li
                                              className="cmp-navigation-v2__item standard-primary-nav-item primary-nav-item"
                                              data-redirect="false"
                                              data-locale="en_us"
                                            >
                                              <a
                                                href=""
                                                className="cmp-navigation-v2__item-link primary-nav navlink "
                                              >
                                                Company
                                              </a>
                                              <span className="icon icon-carat_right go-to-subnav" />
                                              <nav
                                                className="secondary-navigation-v2"
                                                role="navigation"
                                              >
                                                <div className="aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                                                  <div className="aem-GridColumn aem-GridColumn--default--12 mobile-fullscreen">
                                                    <div className="mobile-back nav-title-primary">
                                                      <span className="icon icon-carat_left go-to-prevnav" />
                                                      Company
                                                    </div>
                                                    <ul className="lazy-entry cmp-navigation-v2__nav-level-2">
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/company/about-us"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/company/History_Nav_Company.svg"
                                                              alt="About Us"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            About Us
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/company/investor-relations"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/company/Investors_opt%20A_Nav_Company.svg"
                                                              alt="Investors"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Investors
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/company/ventures"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/company/Ventures_Nav_Company.svg"
                                                              alt="Honeywell Ventures"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Ventures
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/company/quantum"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/company/Quantum_opt%20A_Nav_Company.svg"
                                                              alt="Quantum"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Quantum
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/company/our-history"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/company/hon-icons-history.svg"
                                                              alt="Our History"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            History
                                                          </span>
                                                        </a>
                                                      </li>
                                                      <li className="cmp-navigation-v2__item standard-secondary-nav-item">
                                                        <a
                                                          href="/us/en/company/sustainability"
                                                          className="cmp-navigation-v2__item-link navlink"
                                                          target="_self"
                                                        >
                                                          <span className="icon-wrapper">
                                                            <img
                                                              loading="lazy"
                                                              src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/nav-icons/company/HW%20icons_Sustainability_Projects.svg"
                                                              alt="Sustainabillity"
                                                              className="navlink-icon"
                                                            />
                                                          </span>
                                                          <span className="cmp-navigation-v2__item-title">
                                                            Sustainability
                                                          </span>
                                                        </a>
                                                      </li>
                                                    </ul>
                                                  </div>
                                                </div>
                                              </nav>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div
                                        className="primary-navigation-v2"
                                        data-redirect-page="/content/honeywellbt/us/en.html"
                                        aria-label="News "
                                      >
                                        <div
                                          className="standard-flyout"
                                          id="standard-flyout-nav"
                                        >
                                          <ul className="cmp-navigation-v2__nav-level-1  ">
                                            <li
                                              className="cmp-navigation-v2__item standard-primary-nav-item primary-nav-item"
                                              data-redirect="false"
                                              data-locale="en_us"
                                            >
                                              <a
                                                href="/us/en/news"
                                                className="cmp-navigation-v2__item-link primary-nav navlink "
                                                target="_self"
                                              >
                                                News
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      <div
                                        className="primary-navigation-v2"
                                        data-redirect-page="/content/honeywellbt/us/en.html"
                                        aria-label="Careers"
                                      >
                                        <div
                                          className="standard-flyout"
                                          id="standard-flyout-nav"
                                        >
                                          <ul className="cmp-navigation-v2__nav-level-1  ">
                                            <li
                                              className="cmp-navigation-v2__item standard-primary-nav-item primary-nav-item"
                                              data-redirect="false"
                                              data-locale="en_us"
                                            >
                                              <a
                                                href="https://careers.honeywell.com"
                                                className="cmp-navigation-v2__item-link primary-nav navlink "
                                                target="_blank"
                                              >
                                                Careers
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {/* Import Sign In for mobile */}
                                      <div className="cmp-navigation-v2__header-links">
                                        <div className="signInMobile"></div>
                                        {/* End Import Sign In for mobile */}
                                        {/* Import HeadLinks  for mobile */}
                                        <div className="headLinksMobile">
                                          <div className="header-links-topline top-quick-links d-flex justify-content-end">
                                            <ul className="d-flex list-unstyled">
                                              <input
                                                type="hidden"
                                                defaultValue="true"
                                                className="enableRedirectCLS"
                                                name="enableRedirectCLS"
                                              />
                                              <li
                                                className="icon header-country-icon header-country-clsType"
                                                data-clstype="flyOutCLSV2"
                                              >
                                                <a
                                                  className="countryLangFlyout"
                                                  href=""
                                                  data-locale-current="us/en"
                                                >
                                                  <img
                                                    src="https://honeywell.com/content/dam/honeywellbt/en/images/content-images/global/hon-globe-15px.png"
                                                    alt="icon"
                                                  />
                                                  <span className="countryName">
                                                    USA(EN)
                                                  </span>
                                                </a>
                                                <div className="cmp-cls-v2-flyOut">
                                                  <div className="cmp-cls-v2">
                                                    <ul className="cmp-cls-v2__close">
                                                      <li
                                                        className="cls-mobile-close"
                                                        style={{
                                                          display: "none",
                                                        }}
                                                      >
                                                        <button
                                                          className="cls-mobile-close-button icon icon-close"
                                                          aria-label="Close Flyout "
                                                        />
                                                      </li>
                                                    </ul>
                                                    <div>
                                                      <div className="cmp-cls-v2__header">
                                                        <span className="cmp-cls-v2__heading">
                                                          Global
                                                        </span>
                                                      </div>
                                                      <div className="cmp-cls-v2__searchbar">
                                                        <button
                                                          type="submit"
                                                          className="cmp-cls-v2__searchbar-icon icon-search"
                                                        />
                                                        <input
                                                          className="cmp-cls-v2__searchbar-input"
                                                          autoComplete="off"
                                                          id="clsV2ListSearch"
                                                          type="text"
                                                          placeholder="Search a country"
                                                        />
                                                        <span className="cmp-cls-v2__searchbar-input-close-button icon-close"></span>
                                                      </div>
                                                      <ul className="cmp-cls-v2__regions">
                                                        <li className="cmp-cls-v2__region">
                                                          <p className="cmp-cls-v2__region-title">
                                                            Africa
                                                            <span className="add-down-chevron"></span>
                                                          </p>
                                                          <section className="cmp-cls-v2__region-country">
                                                            <ul>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="dz-en"
                                                                    data-locale-path="dz/en"
                                                                    data-locale="ALGERIA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/dz/en"
                                                                      target="_self"
                                                                    >
                                                                      Algeria -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ao-en"
                                                                    data-locale-path="ao/en"
                                                                    data-locale="ANGOLA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ao/en"
                                                                      target="_self"
                                                                    >
                                                                      Angola -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ke-en"
                                                                    data-locale-path="ke/en"
                                                                    data-locale="KENYA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ke/en"
                                                                      target="_self"
                                                                    >
                                                                      Kenya -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ma-fr"
                                                                    data-locale-path="ma/fr"
                                                                    data-locale="MOROCCO(FR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ma/fr"
                                                                      target="_self"
                                                                    >
                                                                      Morocco -
                                                                      French{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ng-en"
                                                                    data-locale-path="ng/en"
                                                                    data-locale="NIGERIA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ng/en"
                                                                      target="_self"
                                                                    >
                                                                      Nigeria -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="za-en"
                                                                    data-locale-path="za/en"
                                                                    data-locale="SOUTH AFRICA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/za/en"
                                                                      target="_self"
                                                                    >
                                                                      South
                                                                      Africa -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li
                                                                style={{
                                                                  display:
                                                                    "none",
                                                                }}
                                                              >
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="tn-fr"
                                                                    data-locale-path="tn/fr"
                                                                    data-locale="TUNISIA(FR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/tn/fr"
                                                                      target="_self"
                                                                    >
                                                                      Tunisia -
                                                                      French{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                            </ul>
                                                          </section>
                                                        </li>
                                                        <li className="cmp-cls-v2__region">
                                                          <p className="cmp-cls-v2__region-title">
                                                            Asia Pacific
                                                            <span className="add-down-chevron"></span>
                                                          </p>
                                                          <section className="cmp-cls-v2__region-country">
                                                            <ul>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="au-en"
                                                                    data-locale-path="au/en"
                                                                    data-locale="AUSTRALIA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/au/en"
                                                                      target="_self"
                                                                    >
                                                                      Australia
                                                                      - English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="cn-zh"
                                                                    data-locale-path="cn/zh"
                                                                    data-locale="CHINA(ZH)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="https://www.honeywell.com.cn/cn/zh"
                                                                      target="_blank"
                                                                    >
                                                                      China -
                                                                      Chinese{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="in-en"
                                                                    data-locale-path="in/en"
                                                                    data-locale="INDIA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/in/en"
                                                                      target="_self"
                                                                    >
                                                                      India -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="id-id"
                                                                    data-locale-path="id/id"
                                                                    data-locale="INDONESIA(ID)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/id/id"
                                                                      target="_self"
                                                                    >
                                                                      Indonesia
                                                                      -
                                                                      Indonesian
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="jp-ja"
                                                                    data-locale-path="jp/ja"
                                                                    data-locale="JAPAN(JA)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/jp/ja"
                                                                      target="_self"
                                                                    >
                                                                      Japan -
                                                                      Japanese
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="my-en"
                                                                    data-locale-path="my/en"
                                                                    data-locale="MALAYSIA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/my/en"
                                                                      target="_self"
                                                                    >
                                                                      Malaysia -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="kr-ko"
                                                                    data-locale-path="kr/ko"
                                                                    data-locale="REPUBLIC OF KOREA(KO)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/kr/ko"
                                                                      target="_self"
                                                                    >
                                                                      Republic
                                                                      of Korea -
                                                                      Korean
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ph-en"
                                                                    data-locale-path="ph/en"
                                                                    data-locale="PHILIPPINES(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ph/en"
                                                                      target="_self"
                                                                    >
                                                                      Philippines
                                                                      - English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="th-en"
                                                                    data-locale-path="th/en"
                                                                    data-locale="THAILAND(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/th/en"
                                                                      target="_self"
                                                                    >
                                                                      Thailand -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li
                                                                style={{
                                                                  display:
                                                                    "none",
                                                                }}
                                                              >
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="vn-vi"
                                                                    data-locale-path="vn/vi"
                                                                    data-locale="VIETNAM(VI)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/vn/vi"
                                                                      target="_self"
                                                                    >
                                                                      Vietnam -
                                                                      Vietnamese
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                            </ul>
                                                          </section>
                                                        </li>
                                                        <li className="cmp-cls-v2__region">
                                                          <p className="cmp-cls-v2__region-title">
                                                            Europe
                                                            <span className="add-down-chevron"></span>
                                                          </p>
                                                          <section className="cmp-cls-v2__region-country">
                                                            <ul>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="at-de"
                                                                    data-locale-path="at/de"
                                                                    data-locale="AUSTRIA(DE)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/at/de"
                                                                      target="_self"
                                                                    >
                                                                      Austria -
                                                                      German
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="be-fr"
                                                                    data-locale-path="be/fr"
                                                                    data-locale="BELGIUM(FR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/be/fr"
                                                                      target="_self"
                                                                    >
                                                                      Belgium -
                                                                      French{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="be-nl"
                                                                    data-locale-path="be/nl"
                                                                    data-locale="BELGIUM(NL)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/be/nl"
                                                                      target="_self"
                                                                    >
                                                                      Belgium -
                                                                      Dutch
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="bg-bg"
                                                                    data-locale-path="bg/bg"
                                                                    data-locale="BULGARIA(BG)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/bg/bg"
                                                                      target="_self"
                                                                    >
                                                                      Bulgaria -
                                                                      Bulgarian
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="cz-en"
                                                                    data-locale-path="cz/en"
                                                                    data-locale="CZECH REPUBLIC(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/cz/en"
                                                                      target="_self"
                                                                    >
                                                                      Czech
                                                                      Republic -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="dk-da"
                                                                    data-locale-path="dk/da"
                                                                    data-locale="DENMARK(DA)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/dk/da"
                                                                      target="_self"
                                                                    >
                                                                      Denmark -
                                                                      Danish
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="fi-fi"
                                                                    data-locale-path="fi/fi"
                                                                    data-locale="FINLAND(FI)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/fi/fi"
                                                                      target="_self"
                                                                    >
                                                                      Finland -
                                                                      Finnish
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="fr-fr"
                                                                    data-locale-path="fr/fr"
                                                                    data-locale="FRANCE(FR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/fr/fr"
                                                                      target="_self"
                                                                    >
                                                                      France -
                                                                      French{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="de-de"
                                                                    data-locale-path="de/de"
                                                                    data-locale="GERMANY(DE)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/de/de"
                                                                      target="_self"
                                                                    >
                                                                      Germany -
                                                                      German
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="hu-hu"
                                                                    data-locale-path="hu/hu"
                                                                    data-locale="HUNGARY(HU)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/hu/hu"
                                                                      target="_self"
                                                                    >
                                                                      Hungary -
                                                                      Hungarian
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="it-it"
                                                                    data-locale-path="it/it"
                                                                    data-locale="ITALY(IT)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/it/it"
                                                                      target="_self"
                                                                    >
                                                                      Italy -
                                                                      Italian
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="nl-nl"
                                                                    data-locale-path="be/nl"
                                                                    data-locale="NETHERLANDS(NL)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/be/nl"
                                                                      target="_self"
                                                                    >
                                                                      Netherlands
                                                                      - Dutch
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="no-no"
                                                                    data-locale-path="no/nb"
                                                                    data-locale="NORWAY(NO)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/no/nb"
                                                                      target="_self"
                                                                    >
                                                                      Norway -
                                                                      Norwegian
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="pl-pl"
                                                                    data-locale-path="pl/pl"
                                                                    data-locale="POLAND(PL)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/pl/pl"
                                                                      target="_self"
                                                                    >
                                                                      Poland -
                                                                      Polish
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ro-en"
                                                                    data-locale-path="ro/en"
                                                                    data-locale="ROMANIA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ro/en"
                                                                      target="_self"
                                                                    >
                                                                      Romania -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="sk-sk"
                                                                    data-locale-path="sk/sk"
                                                                    data-locale="SLOVAKIA(SK)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/sk/sk"
                                                                      target="_self"
                                                                    >
                                                                      Slovakia -
                                                                      Slovak
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ch-fr"
                                                                    data-locale-path="ch/fr"
                                                                    data-locale="SWITZERLAND(FR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ch/fr"
                                                                      target="_self"
                                                                    >
                                                                      Switzerland
                                                                      - French{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ch-de"
                                                                    data-locale-path="ch/de"
                                                                    data-locale="SWITZERLAND(DE)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ch/de"
                                                                      target="_self"
                                                                    >
                                                                      Switzerland
                                                                      - German
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="tr-tr"
                                                                    data-locale-path="tr/tr"
                                                                    data-locale="TURKEY(TR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/tr/tr"
                                                                      target="_self"
                                                                    >
                                                                      Turkey -
                                                                      Turkish
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li
                                                                style={{
                                                                  display:
                                                                    "none",
                                                                }}
                                                              >
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="gb-en"
                                                                    data-locale-path="gb/en"
                                                                    data-locale="UK(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/gb/en"
                                                                      target="_self"
                                                                    >
                                                                      United
                                                                      Kingdom -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                            </ul>
                                                          </section>
                                                        </li>
                                                        <li className="cmp-cls-v2__region">
                                                          <p className="cmp-cls-v2__region-title">
                                                            Latin America
                                                            <span className="add-down-chevron"></span>
                                                          </p>
                                                          <section className="cmp-cls-v2__region-country">
                                                            <ul>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="br-pt"
                                                                    data-locale-path="br/pt"
                                                                    data-locale="BRAZIL(PT)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/br/pt"
                                                                      target="_self"
                                                                    >
                                                                      Brazil -
                                                                      Portuguese{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li
                                                                style={{
                                                                  display:
                                                                    "none",
                                                                }}
                                                              >
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="mx-es"
                                                                    data-locale-path="mx/es"
                                                                    data-locale="MEXICO(ES)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/mx/es"
                                                                      target="_self"
                                                                    >
                                                                      Mexico -
                                                                      Spanish{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                            </ul>
                                                          </section>
                                                        </li>
                                                        <li className="cmp-cls-v2__region">
                                                          <p className="cmp-cls-v2__region-title">
                                                            Middle East
                                                            <span className="add-down-chevron"></span>
                                                          </p>
                                                          <section className="cmp-cls-v2__region-country">
                                                            <ul>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="eg-en"
                                                                    data-locale-path="eg/en"
                                                                    data-locale="EGYPT(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/eg/en"
                                                                      target="_self"
                                                                    >
                                                                      Egypt -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="iq-en"
                                                                    data-locale-path="ae/en"
                                                                    data-locale="IRAQ(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ae/en"
                                                                      target="_self"
                                                                    >
                                                                      Iraq -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="kw-en"
                                                                    data-locale-path="ae/en"
                                                                    data-locale="KUWAIT(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ae/en"
                                                                      target="_self"
                                                                    >
                                                                      Kuwait -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="om-en"
                                                                    data-locale-path="ae/en"
                                                                    data-locale="OMAN(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ae/en"
                                                                      target="_self"
                                                                    >
                                                                      Oman -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="qa-en"
                                                                    data-locale-path="ae/en"
                                                                    data-locale="QATAR(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ae/en"
                                                                      target="_self"
                                                                    >
                                                                      Qatar -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="sa-ar"
                                                                    data-locale-path="sa/ar"
                                                                    data-locale="SAUDI ARABIA(AR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/sa/ar"
                                                                      target="_self"
                                                                    >
                                                                      Saudi
                                                                      Arabia -
                                                                      Arabic
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="sa-en"
                                                                    data-locale-path="sa/en"
                                                                    data-locale="SAUDI ARABIA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/sa/en"
                                                                      target="_self"
                                                                    >
                                                                      Saudi
                                                                      Arabia -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ae-ar"
                                                                    data-locale-path="ae/ar"
                                                                    data-locale="UAE(AR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ae/ar"
                                                                      target="_self"
                                                                    >
                                                                      United
                                                                      Arab
                                                                      Emirates -
                                                                      Arabic
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li
                                                                style={{
                                                                  display:
                                                                    "none",
                                                                }}
                                                              >
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ae-en"
                                                                    data-locale-path="ae/en"
                                                                    data-locale="UAE(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ae/en"
                                                                      target="_self"
                                                                    >
                                                                      United
                                                                      Arab
                                                                      Emirates -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                            </ul>
                                                          </section>
                                                        </li>
                                                        <li
                                                          className="cmp-cls-v2__region"
                                                          style={{
                                                            display: "none",
                                                          }}
                                                        >
                                                          <p className="cmp-cls-v2__region-title">
                                                            North America
                                                            <span className="add-down-chevron"></span>
                                                          </p>
                                                          <section className="cmp-cls-v2__region-country">
                                                            <ul>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ca-en"
                                                                    data-locale-path="ca/en"
                                                                    data-locale="CANADA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ca/en"
                                                                      target="_self"
                                                                    >
                                                                      Canada -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li>
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="ca-fr"
                                                                    data-locale-path="ca/fr"
                                                                    data-locale="CANADA(FR)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/ca/fr"
                                                                      target="_self"
                                                                    >
                                                                      Canada -
                                                                      French{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                              <li
                                                                style={{
                                                                  display:
                                                                    "none",
                                                                }}
                                                              >
                                                                <ul className="cmp-cls-v2__languageList">
                                                                  <li
                                                                    className="cmp-cls-v2__languageList-items"
                                                                    data-country-language-code="us-en"
                                                                    data-locale-path="us/en"
                                                                    data-locale="USA(EN)"
                                                                    style={{
                                                                      display:
                                                                        "none",
                                                                    }}
                                                                  >
                                                                    <a
                                                                      className="cmp-cls-v2__languageList-items-link"
                                                                      href="/us/en"
                                                                      target="_self"
                                                                    >
                                                                      United
                                                                      States -
                                                                      English{" "}
                                                                    </a>
                                                                  </li>
                                                                </ul>
                                                              </li>
                                                            </ul>
                                                          </section>
                                                        </li>
                                                      </ul>
                                                      <section className="cmp-cls-v2__search">
                                                        <ul className="cmp-cls-v2__search-list"></ul>
                                                      </section>
                                                    </div>
                                                  </div>
                                                </div>
                                              </li>
                                              <li>|</li>
                                              <li className="header-links-topline__sbglinks">
                                                <a
                                                  className="header-links-topline__sbglinks-heading"
                                                  href=""
                                                >
                                                  <span className="header-links-topline__sbglinks-heading-title">
                                                    BUSINESSES
                                                  </span>
                                                  <span className="go-to-sbg-links" />
                                                </a>
                                                <div className="header-sbg-links-section">
                                                  <div className="mobile-back-sbg-heading">
                                                    <span className="icon icon-carat_left go-back-sbg-link" />
                                                    BUSINESSES
                                                  </div>
                                                  <ul className="header-links-topline__sbglinks-list">
                                                    <li className="header-links-topline__sbglink">
                                                      <a
                                                        href="https://aerospace.honeywell.com/us/en"
                                                        target="_blank"
                                                      >
                                                        <span className="header-links-topline__sbglink-text align-middle">
                                                          Aerospace Technologies
                                                        </span>
                                                        <span className="header-links-topline__sbglink-icon" />
                                                      </a>
                                                    </li>
                                                    <li className="header-links-topline__sbglink">
                                                      <a
                                                        href="https://automation.honeywell.com/us/en"
                                                        target="_blank"
                                                      >
                                                        <span className="header-links-topline__sbglink-text align-middle">
                                                          Industrial Automation
                                                        </span>
                                                        <span className="header-links-topline__sbglink-icon" />
                                                      </a>
                                                    </li>
                                                    <li className="header-links-topline__sbglink">
                                                      <a
                                                        href="https://buildings.honeywell.com/us/en"
                                                        target="_blank"
                                                      >
                                                        <span className="header-links-topline__sbglink-text align-middle">
                                                          Building Automation
                                                        </span>
                                                        <span className="header-links-topline__sbglink-icon" />
                                                      </a>
                                                    </li>
                                                    <li className="header-links-topline__sbglink">
                                                      <a
                                                        href="https://ess.honeywell.com/us/en"
                                                        target="_blank"
                                                      >
                                                        <span className="header-links-topline__sbglink-text align-middle">
                                                          Energy And
                                                          Sustainability
                                                          Solutions
                                                        </span>
                                                        <span className="header-links-topline__sbglink-icon" />
                                                      </a>
                                                    </li>
                                                    <li
                                                      className="header-links-topline__sbglink"
                                                      style={{
                                                        display: "none",
                                                      }}
                                                    >
                                                      <a
                                                        href="https://www.honeywellforge.ai/"
                                                        target="_blank"
                                                      >
                                                        <span className="header-links-topline__sbglink-text align-middle">
                                                          Honeywell Forge
                                                        </span>
                                                        <span className="header-links-topline__sbglink-icon" />
                                                      </a>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </li>
                                              <li>|</li>
                                              <li>
                                                <a
                                                  href="/us/en/contact"
                                                  target="_self"
                                                >
                                                  Contact
                                                </a>
                                              </li>
                                              <li style={{ display: "none" }}>
                                                |
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                        {/* End Head Links for mobile */}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <button className="icon icon-search search-button header-search">
                                  Search
                                </button>
                                <div className="search-bar-takeover search-bar-takeover--header aem-GridColumn aem-GridColumn--default--12">
                                  <input
                                    type="hidden"
                                    name="search-bar-takeover-enable-highlight"
                                  />
                                  <div className="search-bar-takeover__container search-without-takeover search-bar-takeover__container--without ">
                                    <form action="/us/en/search">
                                      <div className="search-bar-takeover__search-bar">
                                        <button
                                          type="submit"
                                          className="search-bar-takeover__search-button icon icon-search"
                                        />
                                        <div className="search-bar-takeover__separate" />
                                        <input
                                          title="Search Honeywell"
                                          name="search"
                                          className="search-bar-takeover__input-text"
                                          type="text"
                                          placeholder="Search Honeywell"
                                          data-type-ahead-search="true"
                                          data-suggestion-result-size={5}
                                        />
                                        <span className="search-bar-takeover__close-button icon icon-close" />
                                      </div>
                                      <div
                                        className="type-ahead-container-row"
                                        style={{ display: "none" }}
                                      >
                                        <div className="type-ahead-container">
                                          <ul className="type-ahead-search-row th-search-click" />
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                  <div className="takeover-suggestion-path d-none">
                                    /content/honeywellbt/us/en/search.html
                                  </div>
                                  <div className="takeover-suggestion-fields d-none">
                                    <div className="takeover-suggestion-field">
                                      title
                                    </div>
                                    <div className="takeover-suggestion-field">
                                      subtitle
                                    </div>
                                  </div>
                                  <div
                                    data-suggestion-takeover-swiftype="/sm/api/swiftype/joule-bt-corp-honeywellbt-prod/query-suggestion"
                                    className="d-none takeover-suggestion-apikey"
                                  />
                                </div>
                              </div>
                            </div>
                            <input
                              type="hidden"
                              id="dynamicCatalogueEnabled"
                              name="dynamicCatalogueEnabled"
                              defaultValue="false"
                            />
                            <div className="Dynamic-catalog d-none">
                              <div className="Catalog">
                                <p className="catalog-message">
                                  You are browsing the product catalog for
                                </p>
                                <p
                                  id="catalog-countryname"
                                  className="country-name"
                                />
                              </div>
                              <div className="Catalog-sign">
                                <div className="sign-account">
                                  <i className="removeCatalog" />
                                </div>
                              </div>
                            </div>
                          </header>
                          <style
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n    #myAeroNavMnuDvNew,\n    #myAeroFooterDvNew {\n        display: none;\n    }\n    .js-mainHeader{\n        display: none;\n    }\n",
                            }}
                          />
                        </div>
                        <div className="breadcrumb aem-GridColumn--default--none aem-GridColumn--default--9 aem-GridColumn aem-GridColumn--offset--default--1">
                          <input
                            type="hidden"
                            id="required-value"
                            data-startlevelval={4}
                            data-showhiddenval="false"
                            data-hidecurrentval="false"
                            data-targetab="_self"
                          />
                        </div>
                        <div className="page-load-analytics-data aem-GridColumn aem-GridColumn--default--12">
                          <div
                            className="page_global_info d-none"
                            data--l4-category="N/A"
                            data--l3-category="N/A"
                            data--l2-category="N/A"
                            data--l1-category="N/A"
                            data-datalayer-sbgname="HON"
                            data-enable-global-datalayer-analytics="true"
                            enable-server-side-analytics="false"
                            tenant-path="/content/honeywellbt"
                            analytics-api-path="/content/experience-fragments/honeywellbt/us/en/site/header/master/jcr:content/root/responsivegrid/page_load_analytics__1843035740.pageanalytics"
                            data-page-name="Manufacturing"
                            data-page="/content/honeywellbt/us/en/industries/manufacturing"
                            data-language="en"
                            data-country="US"
                            data-sbgname="HON"
                          ></div>
                          <div
                            className="user_global_info d-none"
                            data-lob="N/A"
                            data-usertype="jsFetch"
                            data-accountname="jsFetch"
                            data-accountid="jsFetch"
                            data-emailid="jsFetch"
                            data-jobtitle="jsFetch"
                            data-function="jsFetch"
                            data-department="jsFetch"
                            data-postalcode="jsFetch"
                            data-city="jsFetch"
                            data-name="jsFetch"
                            data-custgroup="jsFetch"
                            data-custtype="jsFetch"
                            data-marketo-i-d="jsFetch"
                            data-visitor-access-level="jsFetch"
                            data-loginstate="Logged In"
                            data-anonymousstate="Anonymous"
                            data-visitor-region="jsFetch"
                            data-authenticationstatus="jsFetch"
                            data-user-i-d="jsFetch"
                            data-visitorstate="jsFetch"
                          ></div>
                          <div
                            className="page_load_event_info d-none"
                            data-eventname="Page Load"
                          ></div>
                        </div>
                        <div className="globalnotification globalnotification--critical globalnotification--banner aem-GridColumn aem-GridColumn--default--12"></div>
                        <div className="globalnotification globalnotification--critical globalnotification--banner aem-GridColumn aem-GridColumn--default--12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
              <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">

                {entry.content.map((item, key) => {
                  if (item.hasOwnProperty("hero")) {
                    return <Hero key={key} data={item.hero} />
                  }
                  if (item.hasOwnProperty("articles")) {
                    return <ManufacturingArticles key={key} data={item.articles}/>
                  }
                  if (item.hasOwnProperty("carousel")) {
                    return <Carousel key={key} data={item.carousel}/>
                  }
                  if (item.hasOwnProperty("text_cta")) {
                    return <TextCTA key={key} data={item.text_cta}/>
                  }
                })}

              </div>
            </div>
            <div className="localized-experiencefragment experiencefragment aem-GridColumn aem-GridColumn--default--12">
              <div className="cmp-experiencefragment cmp-experiencefragment--footer">
                <div className="xf-content-height">
                  <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                    <div className="responsivegrid aem-GridColumn aem-GridColumn--default--12">
                      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                        <div className="htmlcontent parbase aem-GridColumn aem-GridColumn--default--12"></div>
                        <div className="flexible-footer responsivegrid aem-GridColumn aem-GridColumn--default--12">
                          <div className="footer-content offset-lg-0 col-lg-12 col-12 mt-5 ">
                            <div className="row footer-content__container">
                              <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
                                <div className="responsivegrid aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
                                  <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12 ">
                                    <div className="responsivegrid aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                                      <div className="aem-Grid aem-Grid--3 aem-Grid--default--3 aem-Grid--phone--12 ">
                                        <div className="footer-links aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--10 aem-GridColumn aem-GridColumn--offset--phone--1 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                                          <div className="footer--links__title d-flex justify-content-between d-md-block">
                                            Businesses
                                          </div>
                                          <a
                                            className="js-collapse-link d-md-none m-0"
                                            href="#?"
                                          >
                                            <span className="icon icon-carat_down" />
                                            <span className="sr-only">
                                              toggle view
                                            </span>
                                          </a>
                                          <ul className="footer--links__list d-md-flex flex-column justify-content-center align-items-start pl-0 hidden">
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="https://aerospace.honeywell.com/"
                                                target="_blank"
                                              >
                                                Aerospace Technologies
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="https://automation.honeywell.com/us/en"
                                                target="_blank"
                                              >
                                                Industrial Automation
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="https://buildings.honeywell.com/us/en"
                                                target="_blank"
                                              >
                                                Building Automation
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="https://ess.honeywell.com/us/en"
                                                target="_blank"
                                              >
                                                Energy and Sustainability
                                                Solutions
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="https://www.honeywellforge.ai/"
                                                target="_blank"
                                              >
                                                Honeywell Forge
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="text aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--3"></div>
                                        <div className="footer-links aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--10 aem-GridColumn aem-GridColumn--offset--phone--1 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                                          <div className="footer--links__title d-flex justify-content-between d-md-block">
                                            What We Do
                                          </div>
                                          <a
                                            className="js-collapse-link d-md-none m-0"
                                            href="#?"
                                          >
                                            <span className="icon icon-carat_down" />
                                            <span className="sr-only">
                                              toggle view
                                            </span>
                                          </a>
                                          <ul className="footer--links__list d-md-flex flex-column justify-content-center align-items-start pl-0 hidden">
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/products"
                                                target="_self"
                                              >
                                                Our Products
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/company/quantum"
                                                target="_self"
                                              >
                                                Quantum Solutions
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="responsivegrid aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                                      <div className="aem-Grid aem-Grid--3 aem-Grid--default--3 aem-Grid--phone--12 ">
                                        <div className="footer-links aem-GridColumn--phone--none aem-GridColumn--phone--10 aem-GridColumn aem-GridColumn--offset--phone--1 aem-GridColumn--default--3">
                                          <div className="footer--links__title d-flex justify-content-between d-md-block">
                                            INDUSTRIES
                                          </div>
                                          <a
                                            className="js-collapse-link d-md-none m-0"
                                            href="#?"
                                          >
                                            <span className="icon icon-carat_down" />
                                            <span className="sr-only">
                                              toggle view
                                            </span>
                                          </a>
                                          <ul className="footer--links__list d-md-flex flex-column justify-content-center align-items-start pl-0 hidden">
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/aerospace"
                                                target="_self"
                                              >
                                                Aerospace
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/buildings-cities"
                                                target="_self"
                                              >
                                                Commercial Buildings
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/energy"
                                                target="_self"
                                              >
                                                Energy
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/healthcare"
                                                target="_self"
                                              >
                                                Healthcare
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/high-tech"
                                                target="_blank"
                                              >
                                                IT/High-Tech
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/life-sciences"
                                                target="_self"
                                              >
                                                Life Sciences
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/supply-chain"
                                                target="_self"
                                              >
                                                Logistics &amp; Warehouse
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/manufacturing"
                                                target="_self"
                                              >
                                                Manufacturing
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/retail"
                                                target="_self"
                                              >
                                                Retail
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/industries/utilities"
                                                target="_self"
                                              >
                                                Utilities
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="responsivegrid aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                                      <div className="aem-Grid aem-Grid--3 aem-Grid--default--3 aem-Grid--phone--12 ">
                                        <div className="footer-links aem-GridColumn--phone--none aem-GridColumn--phone--10 aem-GridColumn aem-GridColumn--offset--phone--1 aem-GridColumn--default--3">
                                          <div className="footer--links__title d-flex justify-content-between d-md-block">
                                            Company
                                          </div>
                                          <a
                                            className="js-collapse-link d-md-none m-0"
                                            href="#?"
                                          >
                                            <span className="icon icon-carat_down" />
                                            <span className="sr-only">
                                              toggle view
                                            </span>
                                          </a>
                                          <ul className="footer--links__list d-md-flex flex-column justify-content-center align-items-start pl-0 hidden">
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/company/about-us"
                                                target="_self"
                                              >
                                                About Us
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/company/our-history"
                                                target="_self"
                                              >
                                                History
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/company/investor-relations"
                                                target="_self"
                                              >
                                                Investors
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/company/leadership"
                                                target="_self"
                                              >
                                                Leadership
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/company/inclusion-and-diversity"
                                                target="_self"
                                              >
                                                Inclusion &amp; Diversity
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="text aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--3"></div>
                                        <div className="footer-links aem-GridColumn--phone--none aem-GridColumn--phone--10 aem-GridColumn aem-GridColumn--offset--phone--1 aem-GridColumn--default--3">
                                          <div className="footer--links__title d-flex justify-content-between d-md-block">
                                            News
                                          </div>
                                          <a
                                            className="js-collapse-link d-md-none m-0"
                                            href="#?"
                                          >
                                            <span className="icon icon-carat_down" />
                                            <span className="sr-only">
                                              toggle view
                                            </span>
                                          </a>
                                          <ul className="footer--links__list d-md-flex flex-column justify-content-center align-items-start pl-0 hidden">
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/news"
                                                target="_self"
                                              >
                                                News
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/press"
                                                target="_self"
                                              >
                                                Press &amp; Media
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="responsivegrid aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                                      <div className="aem-Grid aem-Grid--3 aem-Grid--default--3 aem-Grid--phone--12 ">
                                        <div className="footer-links aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--10 aem-GridColumn aem-GridColumn--offset--phone--1 aem-GridColumn--default--3 aem-GridColumn--offset--default--0">
                                          <div className="footer--links__title d-flex justify-content-between d-md-block">
                                            Careers
                                          </div>
                                          <a
                                            className="js-collapse-link d-md-none m-0"
                                            href="#?"
                                          >
                                            <span className="icon icon-carat_down" />
                                            <span className="sr-only">
                                              toggle view
                                            </span>
                                          </a>
                                          <ul className="footer--links__list d-md-flex flex-column justify-content-center align-items-start pl-0 hidden">
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/careers"
                                                target="_self"
                                              >
                                                Careers
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="https://careers.honeywell.com/us/en/search-results"
                                                target="_self"
                                              >
                                                Job Search
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="text aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--3"></div>
                                        <div className="footer-links aem-GridColumn--phone--none aem-GridColumn--phone--10 aem-GridColumn aem-GridColumn--offset--phone--1 aem-GridColumn--default--3">
                                          <div className="footer--links__title d-flex justify-content-between d-md-block">
                                            Contact Us
                                          </div>
                                          <a
                                            className="js-collapse-link d-md-none m-0"
                                            href="#?"
                                          >
                                            <span className="icon icon-carat_down" />
                                            <span className="sr-only">
                                              toggle view
                                            </span>
                                          </a>
                                          <ul className="footer--links__list d-md-flex flex-column justify-content-center align-items-start pl-0 hidden">
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/contact/support"
                                                target="_self"
                                              >
                                                Support
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/contact/business-inquiries"
                                                target="_self"
                                              >
                                                Business Inquiries
                                              </a>
                                            </li>
                                            <li>
                                              <a
                                                className="footer--links__list-item"
                                                href="/us/en/employee-access"
                                                target="_self"
                                              >
                                                Employee Access
                                              </a>
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="footer-socials aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--offset--phone--0 aem-GridColumn--default--3">
                                          <div className="footer--links__content d-flex d-md-block flex-nowrap flex-column flex-md-row">
                                            <div className="footer--links__title  footer--links__title-social d-flex justify-content-between text-center text-md-left d-md-block">
                                              FOLLOW US
                                            </div>
                                            <ul className="footer--links__socials d-flex flex-wrap pl-0">
                                              <li>
                                                <a
                                                  href="https://www.linkedin.com/company/honeywell"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  aria-label="true"
                                                >
                                                  <svg
                                                    version="1.1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 42 42"
                                                    enableBackground="new 0 0 42 42"
                                                    xmlSpace="preserve"
                                                    aria-labelledby="linkedin-svg"
                                                  >
                                                    <title className="linkedin-svg">
                                                      LinkedIn
                                                    </title>
                                                    <g>
                                                      <path
                                                        fill="#E0E0E0"
                                                        d="M12,35H6V17h6V35z M9.6,13.9c-2,0-3.6-1.6-3.6-3.6c0-2,1.6-3.7,3.6-3.7c2,0,3.6,1.6,3.6,3.7
		C13.2,12.3,11.6,13.9,9.6,13.9L9.6,13.9z M35,35h-6V24.9c0-1.6-1.9-3-3.5-3c-1.6,0-3.5,1.4-3.5,3V35h-6V17h6v2.8
		c1-1.6,3.7-2.8,5.5-2.8c3.8,0,7.5,3.2,7.5,7.1V35z M34.8,35.6"
                                                      />
                                                    </g>
                                                  </svg>
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="https://www.facebook.com/Honeywell/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  aria-label="true"
                                                >
                                                  <svg
                                                    version="1.1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 42 42"
                                                    enableBackground="new 0 0 42 42"
                                                    xmlSpace="preserve"
                                                    aria-labelledby="facebook-svg"
                                                  >
                                                    <title className="facebook-svg">
                                                      Facebook
                                                    </title>
                                                    <path
                                                      fill="#E0E0E0"
                                                      d="M17,37V23h-4v-6h4v-5.3C17,8.1,20.1,5,23.7,5H29v5h-3.9C24,10,24,11.4,24,12.5V17h4.6l-0.8,6H24v14H17z"
                                                    />
                                                  </svg>
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="https://twitter.com/honeywell"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  aria-label="true"
                                                >
                                                  <svg
                                                    version="1.1"
                                                    id="svg5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 813.2 904.7"
                                                    style={{
                                                      enableBackground:
                                                        "new 0 0 813.2 904.7",
                                                    }}
                                                    xmlSpace="preserve"
                                                  >
                                                    <style
                                                      type="text/css"
                                                      dangerouslySetInnerHTML={{
                                                        __html:
                                                          "\n\t.st0{fill:#FFFFFF;}\n",
                                                      }}
                                                    />
                                                    <title className="twitter-svg">
                                                      Twitter
                                                    </title>
                                                    <g>
                                                      <g
                                                        id="layer1"
                                                        transform="translate(52.390088,-25.058597)"
                                                      >
                                                        <path
                                                          id="path1009"
                                                          className="st0"
                                                          d="M57.7,198.5l230.1,307.6L56.2,756.3h52.1l202.7-219l163.8,219h177.3l-243-324.9l215.5-232.8
			h-52.1L385.8,400.2L235,198.5H57.7z M134.3,236.9h81.5l359.7,481H494L134.3,236.9z"
                                                        />
                                                      </g>
                                                    </g>
                                                  </svg>
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="https://www.youtube.com/user/honeywell"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  aria-label="true"
                                                >
                                                  <svg
                                                    version="1.1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 42 42"
                                                    enableBackground="new 0 0 42 42"
                                                    xmlSpace="preserve"
                                                    aria-labelledby="youtube-svg"
                                                  >
                                                    <title className="youtube-svg">
                                                      YouTube
                                                    </title>
                                                    <g>
                                                      <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        fill="#E0E0E0"
                                                        d="M36,14.5c0-2.5-2-4.5-4.4-4.5H10.4C8,10,6,12,6,14.5v12.1
		C6,29,8,31,10.4,31h21.1c2.5,0,4.4-2,4.4-4.5V14.5z M18,26.1V14.9l8.5,5.6L18,26.1z M17.3,25.1"
                                                      />
                                                    </g>
                                                  </svg>
                                                </a>
                                              </li>
                                              <li>
                                                <a
                                                  href="https://www.instagram.com/honeywell/"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  aria-label="true"
                                                >
                                                  <svg
                                                    version="1.1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 42 42"
                                                    enableBackground="new 0 0 42 42"
                                                    xmlSpace="preserve"
                                                    aria-labelledby="instagram-svg"
                                                  >
                                                    <title className="instagram-svg">
                                                      Instagram
                                                    </title>
                                                    <g>
                                                      <g>
                                                        <defs>
                                                          <rect
                                                            id="SVGID_1_"
                                                            x={6}
                                                            y={6}
                                                            width={30}
                                                            height={30}
                                                          />
                                                        </defs>
                                                        <clipPath id="SVGID_2_">
                                                          <use
                                                            xlinkHref="#SVGID_1_"
                                                            overflow="visible"
                                                          />
                                                        </clipPath>
                                                      </g>
                                                      <path
                                                        fill="#E0E0E0"
                                                        d="M20.9,8.8c4,0,4.4,0,6,0.1c1.5,0.1,2.2,0.3,2.8,0.5c0.7,0.3,1.2,0.6,1.7,1.1c0.5,0.5,0.8,1,1.1,1.7
		c0.2,0.5,0.4,1.3,0.5,2.8c0.1,1.6,0.1,2,0.1,6c0,4,0,4.4-0.1,6c-0.1,1.5-0.3,2.2-0.5,2.8c-0.3,0.7-0.6,1.2-1.1,1.7
		c-0.5,0.5-1,0.8-1.7,1.1c-0.5,0.2-1.3,0.4-2.8,0.5c-1.6,0.1-2,0.1-6,0.1c-4,0-4.4,0-6-0.1c-1.5-0.1-2.2-0.3-2.8-0.5
		c-0.7-0.3-1.2-0.6-1.7-1.1c-0.5-0.5-0.8-1-1.1-1.7c-0.2-0.5-0.4-1.3-0.5-2.8c-0.1-1.6-0.1-2-0.1-6c0-4,0-4.4,0.1-6
		c0.1-1.5,0.3-2.2,0.5-2.8c0.3-0.7,0.6-1.2,1.1-1.7c0.5-0.5,1-0.8,1.7-1.1c0.5-0.2,1.3-0.4,2.8-0.5C16.4,8.9,16.9,8.8,20.9,8.8
		 M20.9,6.2c-4,0-4.5,0-6.1,0.1c-1.6,0.1-2.7,0.3-3.6,0.7c-1,0.4-1.8,0.9-2.6,1.7c-0.8,0.8-1.3,1.7-1.7,2.6c-0.4,0.9-0.6,2-0.7,3.6
		C6,16.5,6,17,6,21c0,4,0,4.5,0.1,6.1c0.1,1.6,0.3,2.7,0.7,3.6c0.4,1,0.9,1.8,1.7,2.6c0.8,0.8,1.7,1.3,2.6,1.7
		c0.9,0.4,2,0.6,3.6,0.7c1.6,0.1,2.1,0.1,6.1,0.1c4,0,4.5,0,6.1-0.1c1.6-0.1,2.7-0.3,3.6-0.7c1-0.4,1.8-0.9,2.6-1.7
		c0.8-0.8,1.3-1.7,1.7-2.6c0.4-0.9,0.6-2,0.7-3.6c0.1-1.6,0.1-2.1,0.1-6.1c0-4,0-4.5-0.1-6.1c-0.1-1.6-0.3-2.7-0.7-3.6
		c-0.4-1-0.9-1.8-1.7-2.6c-0.8-0.8-1.7-1.3-2.6-1.7c-0.9-0.4-2-0.6-3.6-0.7C25.4,6.2,24.9,6.2,20.9,6.2"
                                                      />
                                                      <path
                                                        fill="#E0E0E0"
                                                        d="M20.9,13.4c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6c4.2,0,7.6-3.4,7.6-7.6
		C28.5,16.8,25.1,13.4,20.9,13.4 M20.9,26c-2.7,0-5-2.2-5-5s2.2-5,5-5c2.7,0,5,2.2,5,5S23.6,26,20.9,26"
                                                      />
                                                      <path
                                                        fill="#E0E0E0"
                                                        d="M30.6,13.1c0,1-0.8,1.8-1.8,1.8c-1,0-1.8-0.8-1.8-1.8c0-1,0.8-1.8,1.8-1.8C29.8,11.3,30.6,12.1,30.6,13.1"
                                                      />
                                                    </g>
                                                  </svg>
                                                </a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="scroll-to-top js-to-top d-inline-block">
                                <a className="icon icon-carat_up" href="#?">
                                  <span className="sr-only">Scroll to top</span>
                                </a>
                              </div>
                            </div>
                            <div className="footer-content__bottom d-flex flex-wrap justify-content-between flex-column flex-md-row footer-content__container row">
                              <div className="col-xl-6">
                                <p className="footer-content__copyright m-0">
                                  Copyright © 2024 Honeywell International Inc.
                                </p>
                              </div>
                              <div className="col-xl-6">
                                <div className="footer-content__bottom-display">
                                  <div className="footer-content__bottom-link">
                                    <a
                                      className="footer--links__list-item"
                                      href="/us/en/terms-and-conditions"
                                      target="_self"
                                    >
                                      Terms &amp; Conditions
                                    </a>
                                    <span className="footer-content__bottom-link-border" />
                                  </div>
                                  <div className="footer-content__bottom-link">
                                    <a
                                      className="footer--links__list-item"
                                      href="/us/en/privacy-statement"
                                      target="_self"
                                    >
                                      Privacy Statement
                                    </a>
                                    <span className="footer-content__bottom-link-border" />
                                  </div>
                                  <div className="footer-content__bottom-link">
                                    <a
                                      className="footer--links__list-item"
                                      href="https://hon-opcenter.my.salesforce-sites.com/PrivacyInformationRequestForm?lang=en"
                                      target="_blank"
                                    >
                                      <span>Your Privacy Choices</span>
                                      <img
                                        src="https://honeywell.com/content/dam/images/ccpa-privacyoptions.svg"
                                        className="footer-icon"
                                        alt="icon"
                                      />
                                    </a>
                                    <span className="footer-content__bottom-link-border" />
                                  </div>
                                  <div className="footer-content__bottom-link">
                                    <a
                                      className="footer--links__list-item"
                                      href="https://www.honeywell.com/us/en/cookie-notice"
                                      target="_self"
                                    >
                                      Cookie Notice
                                    </a>
                                    <span className="footer-content__bottom-link-border" />
                                  </div>
                                  <div className="footer-content__bottom-link">
                                    <a
                                      className="footer--links__list-item"
                                      href="https://pages1.honeywell.com/GlobalHoneywellUnsubscribe.html"
                                      target="_blank"
                                    >
                                      Global Unsubscribe
                                    </a>
                                    <span className="footer-content__bottom-link-border" />
                                  </div>
                                </div>
                                <div>
                                  <div className="languageselector"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/*document.write("<meta name="google-site-verification" content="5hfpckWZYtzOQdp5UzkBU62Vfcdv48fMYKWtmt8DgrI" />");*/}
      <aside className="modals"></aside>
      <input
        type="hidden"
        className="form-control "
        name="inheritedSearchPage"
        defaultValue="/content/honeywellbt/us/en/search"
      />
      <input
        type="hidden"
        className="form-control "
        name="inheritedHomePage"
        defaultValue="/content/honeywellbt/us/en/home"
      />
      <input
        type="hidden"
        className="form-control "
        name="inheritedPostLoginPage"
      />
      <input
        type="hidden"
        className="form-control "
        name="annual_revalidation_endpoint"
      />
      {/* Global site tag (gtag.js) - Google Ads: 743148289 */}{" "}
      <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://play.vidyard.com/D59hAShN8xKfBnandvBwit?disable_popouts=1&v=4.3.14&type=inline"
      />
      <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://play.vidyard.com/sY6w78RP5kPdKcgvUXmaEs?autoplay=0?disable_popouts=1&v=4.3.14&type=inline"
      />
      <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://play.vidyard.com/KsPaQcmPD9GZoi9RvTrBGM?disable_popouts=1&v=4.3.14&type=inline"
      />
      <img
        src="https://t.co/i/adsct?bci=3&eci=2&event_id=b0d5c61c-cce8-4bfd-b4b0-704805fa4b16&events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&integration=advertiser&p_id=Twitter&p_user_id=0&pl_id=1563763e-44bd-407e-b3b3-b12628121c85&tw_document_href=https%3A%2F%2Fwww.honeywell.com%2Fus%2Fen%2Findustries%2Fmanufacturing&tw_iframe_status=0&tw_order_quantity=0&tw_sale_amount=0&txn_id=o1u0o&type=javascript&version=2.3.30"
        height={1}
        width={1}
        className="optanon-category-C0004 "
        style={{ display: "none" }}
      />
      <img
        src="https://analytics.twitter.com/i/adsct?bci=3&eci=2&event_id=b0d5c61c-cce8-4bfd-b4b0-704805fa4b16&events=%5B%5B%22pageview%22%2C%7B%7D%5D%5D&integration=advertiser&p_id=Twitter&p_user_id=0&pl_id=1563763e-44bd-407e-b3b3-b12628121c85&tw_document_href=https%3A%2F%2Fwww.honeywell.com%2Fus%2Fen%2Findustries%2Fmanufacturing&tw_iframe_status=0&tw_order_quantity=0&tw_sale_amount=0&txn_id=o1u0o&type=javascript&version=2.3.30"
        height={1}
        width={1}
        className="optanon-category-C0004 "
        style={{ display: "none" }}
      />
      <div
        id="batBeacon726452150100"
        style={{ width: 0, height: 0, display: "none", visibility: "hidden" }}
      >
        <img
          id="batBeacon180810390852"
          width={0}
          height={0}
          alt=""
          src="https://bat.bing.com/action/0?ti=283007850&tm=al001&Ver=2&mid=4fd68358-008d-486e-8b60-f1f5253e8c01&sid=041cecb00be811ef9633c9df2b09b352&vid=f363a1b008ba11ef98d477d29acda3cf&vids=0&msclkid=N&pi=918639831&lg=en-US&sw=1728&sh=1117&sc=30&tl=Manufacturing%20%7C%20Honeywell&p=https%3A%2F%2Fwww.honeywell.com%2Fus%2Fen%2Findustries%2Fmanufacturing&r=&lt=321&pt=1715028137278,188,188,,,11,11,11,11,11,,50,155,155,190,319,319,321,,,&pn=1,0&evt=pageLoad&sv=1&rn=314645"
          style={{ width: 0, height: 0, display: "none", visibility: "hidden" }}
          className="optanon-category-C0004 "
        />
      </div>{" "}
      <iframe
        allow="join-ad-interest-group"
        data-tagging-id="AW-743148289"
        data-load-time={1715028137668}
        height={0}
        width={0}
        src="https://td.doubleclick.net/td/rul/743148289?random=1715028137662&cv=11&fst=1715028137662&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45be4510v894794146za200&gcd=13l3l3l3l1&dma=0&u_w=1728&u_h=1117&url=https%3A%2F%2Fwww.honeywell.com%2Fus%2Fen%2Findustries%2Fmanufacturing&hn=www.googleadservices.com&frm=0&tiba=Manufacturing%20%7C%20Honeywell&npa=0&pscdl=noapi&auid=108215559.1714678451&fledge=1&data=event%3Dgtag.config"
        style={{ display: "none", visibility: "hidden" }}
        className="optanon-category-C0004 ot-vscat-C0004 "
        data-gtm-yt-inspected-23="true"
      />
      {/* Google tag (gtag.js) */}
      <div id="onetrust-consent-sdk">
        <div className="onetrust-pc-dark-filter ot-hide ot-fade-in" />
        <div
          id="onetrust-pc-sdk"
          className="otPcTab ot-hide ot-fade-in"
          lang="en"
          aria-label="Preference center"
          role="region"
        >
          <div
            role="alertdialog"
            aria-modal="true"
            aria-describedby="ot-pc-desc"
            style={{ height: "100%" }}
            aria-label="Do Not Sell My Personal Information"
          >
            {/* pc header */}
            <div className="ot-pc-header" role="presentation">
              {/* Header logo */}
              <div className="ot-pc-logo" role="img" aria-label="Company Logo">
                <img
                  alt="Company Logo"
                  src="https://cdn.cookielaw.org/logos/ba35bc6e-7778-4444-a092-5c752d0ba73f/d4ef71b9-cfc8-4d8b-aefb-36489fe11eef/c92ea8b3-9a7d-4041-8821-3e56507c8551/honeywell.png"
                />
              </div>
              <div className="ot-title-cntr">
                <h2 id="ot-pc-title">Do Not Sell My Personal Information</h2>
                <div className="ot-close-cntr">
                  <button
                    id="close-pc-btn-handler"
                    className="ot-close-icon"
                    aria-label="Close"
                    style={{
                      backgroundImage:
                        'url("https://cdn.cookielaw.org/logos/static/ot_close.svg")',
                    }}
                  />
                </div>
              </div>
            </div>
            {/* content */}
            {/* Groups / Sub groups with cookies */}
            <div id="ot-pc-content" className="ot-pc-scrollbar ot-sdk-row">
              <div className="ot-optout-signal ot-hide">
                <div className="ot-optout-icon">
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="ot-floating-button__svg-fill"
                      d="M14.588 0l.445.328c1.807 1.303 3.961 2.533 6.461 3.688 2.015.93 4.576 1.746 7.682 2.446 0 14.178-4.73 24.133-14.19 29.864l-.398.236C4.863 30.87 0 20.837 0 6.462c3.107-.7 5.668-1.516 7.682-2.446 2.709-1.251 5.01-2.59 6.906-4.016zm5.87 13.88a.75.75 0 00-.974.159l-5.475 6.625-3.005-2.997-.077-.067a.75.75 0 00-.983 1.13l4.172 4.16 6.525-7.895.06-.083a.75.75 0 00-.16-.973z"
                      fill="#FFF"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <span />
              </div>
              <div className="ot-sdk-container ot-grps-cntr ot-sdk-column">
                <div
                  className="ot-sdk-four ot-sdk-columns ot-tab-list"
                  aria-label="Cookie Categories"
                >
                  <ul className="ot-cat-grp" role="tablist">
                    <li className="ot-abt-tab" role="presentation">
                      {/* About Privacy container */}
                      <div
                        className="ot-active-menu category-menu-switch-handler"
                        role="tab"
                        tabIndex={0}
                        aria-selected="true"
                        aria-controls="ot-tab-desc"
                      >
                        <h3 id="ot-pvcy-txt">Your Privacy</h3>
                      </div>
                    </li>
                    <li
                      className="ot-cat-item ot-always-active-group ot-vs-config"
                      role="presentation"
                      data-optanongroupid="C0001"
                    >
                      <div
                        className="category-menu-switch-handler"
                        role="tab"
                        tabIndex={-1}
                        aria-selected="false"
                        aria-controls="ot-desc-id-C0001"
                      >
                        <h3 id="ot-header-id-C0001">
                          Strictly Necessary Cookies
                        </h3>
                      </div>
                    </li>
                    <li
                      className="ot-cat-item ot-vs-config"
                      role="presentation"
                      data-optanongroupid="C0002"
                    >
                      <div
                        className="category-menu-switch-handler"
                        role="tab"
                        tabIndex={-1}
                        aria-selected="false"
                        aria-controls="ot-desc-id-C0002"
                      >
                        <h3 id="ot-header-id-C0002">Performance Cookies</h3>
                      </div>
                    </li>
                    <li
                      className="ot-cat-item ot-vs-config"
                      role="presentation"
                      data-optanongroupid="C0004"
                    >
                      <div
                        className="category-menu-switch-handler"
                        role="tab"
                        tabIndex={-1}
                        aria-selected="false"
                        aria-controls="ot-desc-id-C0004"
                      >
                        <h3 id="ot-header-id-C0004">Targeting Cookies</h3>
                      </div>
                    </li>
                    <li
                      className="ot-cat-item ot-vs-config"
                      role="presentation"
                      data-optanongroupid="C0003"
                    >
                      <div
                        className="category-menu-switch-handler"
                        role="tab"
                        tabIndex={-1}
                        aria-selected="false"
                        aria-controls="ot-desc-id-C0003"
                      >
                        <h3 id="ot-header-id-C0003">Functional Cookies</h3>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ot-tab-desc ot-sdk-eight ot-sdk-columns">
                  <div
                    className="ot-desc-cntr"
                    id="ot-tab-desc"
                    tabIndex={0}
                    role="tabpanel"
                    aria-labelledby="ot-pvcy-hdr"
                  >
                    <h4 id="ot-pvcy-hdr">Your Privacy</h4>
                    <p id="ot-pc-desc" className="ot-grp-desc">
                      When you visit our website, we store cookies on your
                      browser to collect information. The information collected
                      might relate to you, your preferences or your device, and
                      is mostly used to make the site work as you expect it to
                      and to provide a more personalized web experience.
                      However, you can choose not to allow certain types of
                      cookies, which may impact your experience of the site and
                      the services we are able to offer. Click on the different
                      category headings to find out more and change our default
                      settings according to your preference. You cannot opt-out
                      of our First Party Strictly Necessary Cookies as they are
                      deployed in order to ensure the proper functioning of our
                      website (such as prompting the cookie banner and
                      remembering your settings, to log into your account, to
                      redirect you when you log out, etc.). For more information
                      about the First and Third Party Cookies used please follow
                      this link.
                      <br />
                      <a
                        href="https://cookiepedia.co.uk/giving-consent-to-cookies"
                        className="privacy-notice-link"
                        rel="noopener"
                        target="_blank"
                        aria-label="More information about your privacy, opens in a new tab"
                      >
                        More information
                      </a>
                    </p>
                  </div>
                  <div
                    className="ot-desc-cntr ot-hide ot-always-active-group"
                    role="tabpanel"
                    tabIndex={0}
                    id="ot-desc-id-C0001"
                  >
                    <div className="ot-grp-hdr1">
                      <h4 className="ot-cat-header">
                        Strictly Necessary Cookies
                      </h4>
                      <div className="ot-tgl-cntr">
                        <div className="ot-always-active">Always Active</div>
                      </div>
                    </div>
                    <p className="ot-grp-desc ot-category-desc">
                      These cookies are necessary for the website to function
                      and cannot be switched off in our systems. They are
                      usually only set in response to actions made by you which
                      amount to a request for services, such as setting your
                      privacy preferences, logging in or filling in forms. You
                      can set your browser to block or alert you about these
                      cookies, but some parts of the site will not then work.
                      These cookies do not store any personally identifiable
                      information.
                    </p>
                    <div className="ot-hlst-cntr">
                      <button
                        className="ot-link-btn category-host-list-handler"
                        aria-label="Cookie Details button opens Cookie List menu"
                        data-parent-id="C0001"
                      >
                        Cookies Details‎
                      </button>
                    </div>
                  </div>
                  <div
                    className="ot-desc-cntr ot-hide"
                    role="tabpanel"
                    tabIndex={0}
                    id="ot-desc-id-C0002"
                  >
                    <div className="ot-grp-hdr1">
                      <h4 className="ot-cat-header">Performance Cookies</h4>
                      <div className="ot-tgl">
                        <input
                          type="checkbox"
                          name="ot-group-id-C0002"
                          id="ot-group-id-C0002"
                          role="switch"
                          className="category-switch-handler"
                          data-optanongroupid="C0002"
                          defaultChecked=""
                          aria-labelledby="ot-header-id-C0002"
                        />{" "}
                        <label
                          className="ot-switch"
                          htmlFor="ot-group-id-C0002"
                        >
                          <span
                            className="ot-switch-nob"
                            aria-checked="true"
                            role="switch"
                            aria-label="Performance Cookies"
                          />{" "}
                          <span className="ot-label-txt">
                            Performance Cookies
                          </span>
                        </label>{" "}
                      </div>
                      <div className="ot-tgl-cntr" />
                    </div>
                    <p className="ot-grp-desc ot-category-desc">
                      These cookies allow us to count visits and traffic sources
                      so we can measure and improve the performance of our site.
                      They help us to know which pages are the most and least
                      popular and see how visitors move around the site. All
                      information these cookies collect is aggregated and
                      therefore anonymous. If you do not allow these cookies we
                      will not know when you have visited our site, and will not
                      be able to monitor its performance.
                    </p>
                    <div className="ot-hlst-cntr">
                      <button
                        className="ot-link-btn category-host-list-handler"
                        aria-label="Cookie Details button opens Cookie List menu"
                        data-parent-id="C0002"
                      >
                        Cookies Details‎
                      </button>
                    </div>
                  </div>
                  <div
                    className="ot-desc-cntr ot-hide"
                    role="tabpanel"
                    tabIndex={0}
                    id="ot-desc-id-C0004"
                  >
                    <div className="ot-grp-hdr1">
                      <h4 className="ot-cat-header">Targeting Cookies</h4>
                      <div className="ot-tgl">
                        <input
                          type="checkbox"
                          name="ot-group-id-C0004"
                          id="ot-group-id-C0004"
                          role="switch"
                          className="category-switch-handler"
                          data-optanongroupid="C0004"
                          defaultChecked=""
                          aria-labelledby="ot-header-id-C0004"
                        />{" "}
                        <label
                          className="ot-switch"
                          htmlFor="ot-group-id-C0004"
                        >
                          <span
                            className="ot-switch-nob"
                            aria-checked="true"
                            role="switch"
                            aria-label="Targeting Cookies"
                          />{" "}
                          <span className="ot-label-txt">
                            Targeting Cookies
                          </span>
                        </label>{" "}
                      </div>
                      <div className="ot-tgl-cntr" />
                    </div>
                    <p className="ot-grp-desc ot-category-desc">
                      These cookies may be set through our site by our
                      advertising partners. They may be used by those companies
                      to build a profile of your interests and show you relevant
                      adverts on other sites. They do not store directly
                      personal information, but are based on uniquely
                      identifying your browser and internet device. If you do
                      not allow these cookies, you will experience less targeted
                      advertising.
                    </p>
                    <div className="ot-hlst-cntr">
                      <button
                        className="ot-link-btn category-host-list-handler"
                        aria-label="Cookie Details button opens Cookie List menu"
                        data-parent-id="C0004"
                      >
                        Cookies Details‎
                      </button>
                    </div>
                  </div>
                  <div
                    className="ot-desc-cntr ot-hide"
                    role="tabpanel"
                    tabIndex={0}
                    id="ot-desc-id-C0003"
                  >
                    <div className="ot-grp-hdr1">
                      <h4 className="ot-cat-header">Functional Cookies</h4>
                      <div className="ot-tgl">
                        <input
                          type="checkbox"
                          name="ot-group-id-C0003"
                          id="ot-group-id-C0003"
                          role="switch"
                          className="category-switch-handler"
                          data-optanongroupid="C0003"
                          defaultChecked=""
                          aria-labelledby="ot-header-id-C0003"
                        />{" "}
                        <label
                          className="ot-switch"
                          htmlFor="ot-group-id-C0003"
                        >
                          <span
                            className="ot-switch-nob"
                            aria-checked="true"
                            role="switch"
                            aria-label="Functional Cookies"
                          />{" "}
                          <span className="ot-label-txt">
                            Functional Cookies
                          </span>
                        </label>{" "}
                      </div>
                      <div className="ot-tgl-cntr" />
                    </div>
                    <p className="ot-grp-desc ot-category-desc">
                      These cookies enable the website to provide enhanced
                      functionality and personalisation. They may be set by us
                      or by third party providers whose services we have added
                      to our pages. If you do not allow these cookies then some
                      or all of these services may not function properly.
                    </p>
                    <div className="ot-hlst-cntr">
                      <button
                        className="ot-link-btn category-host-list-handler"
                        aria-label="Cookie Details button opens Cookie List menu"
                        data-parent-id="C0003"
                      >
                        Cookies Details‎
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Vendors / Hosts */}
            <section id="ot-pc-lst" className="ot-hide ot-enbl-chr">
              <div className="ot-lst-cntr ot-pc-scrollbar">
                <div id="ot-pc-hdr">
                  <div id="ot-lst-title">
                    <button
                      className="ot-link-btn back-btn-handler"
                      aria-label="Back"
                    >
                      <svg
                        id="ot-back-arw"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 444.531 444.531"
                        xmlSpace="preserve"
                      >
                        <title>Back Button</title>
                        <g>
                          <path
                            fill="#656565"
                            d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
            l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
            c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
            s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
            L213.13,222.409z"
                          />
                        </g>
                      </svg>
                    </button>
                    <h3>Cookie List</h3>
                  </div>
                  <div className="ot-lst-subhdr">
                    <div id="ot-search-cntr">
                      <p role="status" className="ot-scrn-rdr" />
                      <input
                        id="vendor-search-handler"
                        type="text"
                        name="vendor-search-handler"
                        placeholder="Search…"
                        aria-label="Cookie list search"
                      />{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 -30 110 110"
                        aria-hidden="true"
                      >
                        <path
                          fill="#2e3644"
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
        s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
        c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
        s-17-7.626-17-17S14.61,6,23.984,6z"
                        />
                      </svg>
                    </div>
                    <div id="ot-fltr-cntr">
                      <button
                        id="filter-btn-handler"
                        aria-label="Filter"
                        aria-haspopup="true"
                      >
                        <svg
                          role="presentation"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          x="0px"
                          y="0px"
                          viewBox="0 0 402.577 402.577"
                          xmlSpace="preserve"
                        >
                          <title>Filter Button</title>
                          <g>
                            <path
                              fill="#2c3643"
                              d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                      c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                      c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                      C402.765,25.895,404.093,19.231,400.858,11.427z"
                            />
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <section id="ot-lst-cnt" className="ot-pc-scrollbar">
                  <div className="ot-sdk-row">
                    <div className="ot-sdk-column">
                      <div id="ot-sel-blk">
                        <div className="ot-sel-all">
                          <div className="ot-sel-all-hdr">
                            <span className="ot-consent-hdr">Consent</span>{" "}
                            <span className="ot-li-hdr">Leg.Interest</span>
                          </div>
                          <div className="ot-sel-all-chkbox">
                            <div className="ot-chkbox" id="ot-selall-hostcntr">
                              <input
                                id="select-all-hosts-groups-handler"
                                type="checkbox"
                              />{" "}
                              <label htmlFor="select-all-hosts-groups-handler">
                                <span className="ot-label-txt">
                                  checkbox label
                                </span>
                              </label>{" "}
                              <span className="ot-label-status">label</span>
                            </div>
                            <div className="ot-chkbox" id="ot-selall-vencntr">
                              <input
                                id="select-all-vendor-groups-handler"
                                type="checkbox"
                              />{" "}
                              <label htmlFor="select-all-vendor-groups-handler">
                                <span className="ot-label-txt">
                                  checkbox label
                                </span>
                              </label>{" "}
                              <span className="ot-label-status">label</span>
                            </div>
                            <div className="ot-chkbox" id="ot-selall-licntr">
                              <input
                                id="select-all-vendor-leg-handler"
                                type="checkbox"
                              />{" "}
                              <label htmlFor="select-all-vendor-leg-handler">
                                <span className="ot-label-txt">
                                  checkbox label
                                </span>
                              </label>{" "}
                              <span className="ot-label-status">label</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul id="ot-host-lst" />
                    </div>
                  </div>
                </section>
              </div>
              <div id="ot-anchor" />
              <section id="ot-fltr-modal">
                <div id="ot-fltr-cnt">
                  <button id="clear-filters-handler">Clear</button>
                  <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
                    <div className="ot-fltr-opts">
                      <div className="ot-fltr-opt">
                        <div className="ot-chkbox">
                          <input
                            id="chkbox-id"
                            type="checkbox"
                            className="category-filter-handler"
                          />{" "}
                          <label htmlFor="chkbox-id">
                            <span className="ot-label-txt">checkbox label</span>
                          </label>{" "}
                          <span className="ot-label-status">label</span>
                        </div>
                      </div>
                    </div>
                    <div className="ot-fltr-btns">
                      <button id="filter-apply-handler">Apply</button>{" "}
                      <button id="filter-cancel-handler">Cancel</button>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            {/* Footer buttons and logo */}
            <div className="ot-pc-footer">
              <div className="ot-btn-container">
                <button className="save-preference-btn-handler onetrust-close-btn-handler">
                  Confirm My Choices
                </button>
                <div className="ot-btn-subcntr">
                  <button className="ot-pc-refuse-all-handler">
                    Reject All
                  </button>{" "}
                  <button id="accept-recommended-btn-handler">Allow All</button>
                </div>
              </div>
              <div className="ot-pc-footer-logo">
                <a
                  href="https://www.onetrust.com/products/cookie-consent/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Powered by OneTrust Opens in a new Tab"
                >
                  <img
                    alt="Powered by Onetrust"
                    src="https://cdn.cookielaw.org/logos/static/powered_by_logo.svg"
                    title="Powered by OneTrust Opens in a new Tab"
                  />
                </a>
              </div>
            </div>
            {/* Cookie subgroup container */}
            {/* Vendor list link */}
            {/* Cookie lost link */}
            {/* Toggle HTML element */}
            {/* Checkbox HTML */}
            {/* Arrow SVG element */}
            {/* Accordion basic element */}
            <span
              className="ot-scrn-rdr"
              aria-atomic="true"
              aria-live="polite"
            />
            {/* Vendor Service container and item template */}
          </div>
          <iframe
            className="ot-text-resize"
            sandbox="allow-same-origin"
            title="onetrust-text-resize"
            style={{ position: "absolute", top: "-50000px", width: "100em" }}
            aria-hidden="true"
            data-gtm-yt-inspected-23="true"
          />
        </div>
        <div
          id="ot-sdk-btn-floating"
          title="Manage Cookies"
          className="ot-floating-button"
        >
          <div className="ot-floating-button__front custom-persistent-icon">
            <button
              type="button"
              className="ot-floating-button__open"
              aria-label="Open Preferences"
            />
          </div>
          <div className="ot-floating-button__back custom-persistent-icon">
            <button
              type="button"
              className="ot-floating-button__close"
              aria-label="Close Preferences"
              aria-hidden="true"
              style={{ display: "none" }}
            >
              {/*?xml version="1.0" encoding="UTF-8"?*/}{" "}
              <svg
                role="presentation"
                tabIndex={-1}
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth={1}
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Banner_02"
                    className="ot-floating-button__svg-fill"
                    transform="translate(-318.000000, -725.000000)"
                    fill="#ffffff"
                    fillRule="nonzero"
                  >
                    <g
                      id="Group-2"
                      transform="translate(305.000000, 712.000000)"
                    >
                      <g id="icon/16px/white/close">
                        <polygon
                          id="Line1"
                          points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"
                        />
                        <polygon
                          id="Line2"
                          transform="translate(25.000000, 25.000000) scale(-1, 1) translate(-25.000000, -25.000000) "
                          points="13.3333333 14.9176256 35.0823744 36.6666667 36.6666667 35.0823744 14.9176256 13.3333333"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <img
        alt=""
        aria-hidden="true"
        width={0}
        height={0}
        id="db_lr_pixel_ad"
        src="https://id.rlcdn.com/464526.gif"
        style={{ display: "none" }}
        className="optanon-category-C0004 "
      />
      <iframe
        id="adroll_slg"
        src="https://x.adroll.com/pxl/iframe_content.html?adroll_fpc=5e9b22d5cda86482322fe3457956a4d8-1714678451591&flg=1&pv=68226873771.852615&arrfrr=https%3A%2F%2Fwww.honeywell.com%2Fus%2Fen%2Findustries%2Fmanufacturing&advertisable=3WLA6X2RSVESDNWOXS5V6Z"
        frameBorder={0}
        marginWidth={0}
        marginHeight={0}
        allow="join-ad-interest-group"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          border: 0,
          padding: 0,
          margin: "0px 0px 0px -1000px",
        }}
        data-gtm-yt-inspected-23="true"
      />
      <img
        height={1}
        width={1}
        style={{ display: "none" }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=3254660&fmt=gif"
        className="optanon-category-C0004 "
      />
      <img
        height={1}
        width={1}
        style={{ display: "none" }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=3254660&fmt=gif"
        className="optanon-category-C0004 "
      />
      <img
        height={1}
        width={1}
        style={{ display: "none" }}
        alt=""
        src="https://px.ads.linkedin.com/collect/?pid=3254660&fmt=gif"
        className="optanon-category-C0004 "
      />
      <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://play.vidyard.com/D59hAShN8xKfBnandvBwit?disable_popouts=1&v=4.3.14&type=inline&rendered=true"
      />
      <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://play.vidyard.com/sY6w78RP5kPdKcgvUXmaEs?autoplay=0?disable_popouts=1&v=4.3.14&type=inline&rendered=true"
      />
      <link
        rel="prefetch"
        crossOrigin="anonymous"
        href="https://play.vidyard.com/KsPaQcmPD9GZoi9RvTrBGM?disable_popouts=1&v=4.3.14&type=inline&rendered=true"
      />
      <a
        style={{
          color: "rgb(255, 255, 255)",
          textShadow: "rgba(0, 0, 0, 0.25) 0px -1px 0px",
          textDecoration: "none",
          boxShadow: "none",
          display: "block",
          cursor: "pointer",
          backgroundColor: "rgb(9, 84, 136)",
          backgroundSize: "100% 100%",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "0px 0px",
          borderRadius: "5px 5px 0px 0px",
          padding: "12px 14px",
          fontSize: 14,
          fontWeight: "bold",
          position: "fixed",
          top: "50%",
          marginTop: "-22.5px",
          transform: "rotate(-90deg)",
          zIndex: 999,
          right: "-26.5px",
          left: "auto",
        }}
        id="smxFeedbackBtn"
      >
        Feedback
      </a>
    </>
  );
}
