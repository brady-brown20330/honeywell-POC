export default function Hero({ data }) {
  return (
    <>
      <div className="superhero superhero-v2 header1-large aem-GridColumn aem-GridColumn--default--12">
        {/*<sly data-sly-test="false">*/}
        {/*    <div class="cq-placeholder cq-marker-start" data-emptytext="SuperHero"></div>*/}
        {/*</sly>*/}
        <div className="superhero-container hero-wrapper">
          {/*    <div data-sly-test="false" class="cq-placeholder" data-emptytext="superhero.jcrTitle"></div>*/}
          <style
            dangerouslySetInnerHTML={{
              __html:
                `\n .mvp-hero-image {\n                    background-image: url("${data.image.url}");\n                }\n                @media (min-width: 768px) {\n                    .mvp-hero-image {\n                        background-image: url("${data.image.url}");\n                    }\n                }\n            `,
            }}
          />
          <div>
            {/*
<sly data-sly-call="" />
*/}
            <div className="cq-dd-image ">
              <div
              // id="superhero-2681"
              // data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
              // data-page-locale="en_us"
              // data-asset-path="honeywell/sps-his-automotive-manufacturing-homepage-banner"
              // data-asset-name="sps-his-automotive-manufacturing-homepage-banner.png"
              // data-asset-type="image"
              // data-viewer-path="https://honeywell.scene7.com/s7viewers/"
              // data-imageserver="https://honeywell.scene7.com/is/image/"
              // data-videoserver="https://honeywell.scene7.com/is/content/"
              // data-contenturl="//honeywell.scene7.com/is/content/"
              // data-wcmdisabled=""
              // data-dms7=""
              // data-mode="smartcrop"
              // className="s7dm-dynamic-media"
              >
                <div className="s7responsiveContainer">
                  <img
                    id="superhero-2681_resp"
                    data-src={data.image.url + 1}
                    src={data.image.url}
                    className="fluidimage lazy"
                    data-mode="smartcrop"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="img-overlay-dark">
            <div
              className="mvp-hero-image mvp2 clearfix"
              data-bg-mobile="//honeywell.scene7.com/is/image/honeywell/sps-his-automotive-manufacturing-homepage-banner:4-5-mobile-hero"
            >
              <div className="container-fluid h-100">
                {/* TO DO: Top Left html */}
                <div className="d-flex justify-content-start">
                  <div className="text-left col-lg-10 offset-lg-1 superhero-heading">
                    <h1 className="header1">
                      <span className="text-red">{data.red_text}</span>
                      <span className="text-white">{data.white_text}</span>
                    </h1>
                    <p className="text-black subheadline d-none d-md-block" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="responsivegrid bg-light-gray p-30 aem-GridColumn aem-GridColumn--default--12">
        <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12 ">
          <div className="sectiontitle text-left pt-10 pb-20 pl-0 pr-0 aem-GridColumn--default--none aem-GridColumn--phone--none aem-GridColumn--phone--12 aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
            {/*Anchor ID */}
            {/*Section title V1*/}
            <h2 className="section-title" />
            {/*Section title V2*/}
            {/*Section subtitle V1*/}
            <h5 className="section-subtitle">{data.summary}</h5>
            {/*Section subtitle V2*/}
          </div>
        </div>
      </div>
    </>
  );
}
