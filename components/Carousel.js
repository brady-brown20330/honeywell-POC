export default function Carousel({ data }) {

  var imageUrl = ''
  if (data.card.length > 0){
    if (data.card[0].image) {
      imageUrl = data.card[0].image.url
    }
  }
  return (
    <div className="responsivegrid bg-white aem-GridColumn aem-GridColumn--default--12">
      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 ">
        <div className="sectiontitle section-title--h-medium pt-50 pl-30 pr-30 aem-GridColumn aem-GridColumn--default--12">
          {/*Anchor ID */}
          {/*Section title V1*/}
          <h2 className="section-title">{data.section_title}</h2>
          {/*Section title V2*/}
          {/*Section subtitle V1*/}
          {/*Section subtitle V2*/}
        </div>
        <div className="static-content-carousel default-carousel static-content-carousel-left-v2 4-3-carousel-slides aem-GridColumn aem-GridColumn--default--12">
          <div className="default-carousel--container ">
            <div
              className="carousel__container slick-initialized slick-slider"
              data-nb-slides={3}
              data-slide-timer={0}
              id="slider0"
            >
              <div className="slick-list draggable">
                <div
                  className="slick-track"
                  style={{
                    opacity: 1,
                    width: 11200,
                    transform: "translate3d(-1600px, 0px, 0px)",
                  }}
                >
                  <div
                    className="slide sc--rows-four slick-slide slick-cloned"
                    data-slick-index={-1}
                    id=""
                    aria-hidden="true"
                    style={{ width: 1600 }}
                    tabIndex={-1}
                  >
                    <div className="slide__container aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                      <div className="slide-pagination slide-pagination--mobile d-block d-sm-none">
                        <span className="slide-number">3</span>
                        <span className="slide-frslash"> / </span>
                        <span className="slide-count">
                          <strong>3</strong>
                        </span>
                      </div>
                      <div className="slide__image-container  aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className="image_desktop">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="4-3-carousel-desktop"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-industrial-semiconductor-2880x1440"
                              data-asset-name="hon-industrial-semiconductor-2880x1440.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Electronic Materials"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:4-3-carousel-desktop"
                                  src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:4-3-carousel-desktop?wid=843&hei=632&dpr=off"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Electronic Materials"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image_mobile">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="16-9-carousel-mobile"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-industrial-semiconductor-2880x1440"
                              data-asset-name="hon-industrial-semiconductor-2880x1440.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Electronic Materials"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:16-9-carousel-mobile"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Electronic Materials"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide__content-wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2
                          className="slide__subtitle"
                          title="Electronic Materials"
                        >
                          Electronic Materials
                        </h2>
                        <div className="slide__text">
                          <p>
                            Providing critical materials that help enhance the
                            performance and productivity of your electronics
                            manufacturing processes.
                          </p>
                        </div>
                        <div className="cta cta--tertiary">
                          <div
                            className="cmp-call-to-action"
                            data-analytics-v2="cta-v2-analytics"
                          >
                            <a
                              className="external-link "
                              target="_blank"
                              href="https://advancedmaterials.honeywell.com/us/en/applications/electronic-materials"
                              tabIndex={-1}
                            >
                              <div className="anchor-text"> Learn More</div>
                            </a>
                          </div>
                        </div>
                        <div className="slide-pagination slide-pagination--desktop d-none d-md-block">
                          <span className="slide-number">3</span>
                          <span className="slide-frslash"> / </span>
                          <span className="slide-count">
                            <strong>3</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide sc--rows-four slick-slide slick-current slick-active"
                    data-slick-index={0}
                    aria-hidden="false"
                    style={{ width: 1600 }}
                    tabIndex={0}
                  >
                    <div className="slide__container aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                      <div className="slide-pagination slide-pagination--mobile d-block d-sm-none">
                        <span className="slide-number">1</span>
                        <span className="slide-frslash"> / </span>
                        <span className="slide-count">
                          <strong>3</strong>
                        </span>
                      </div>
                      <div className="slide__image-container image-clickable aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className="image_desktop">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id="slide-9215"
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="4-3-carousel-desktop"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-semiconductor"
                              data-asset-name="hon-semiconductor.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Semiconductor"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="slide-9215_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-semiconductor:4-3-carousel-desktop"
                                  src={
                                    imageUrl
                                  }
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Semiconductor"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image_mobile">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id="slide-1752"
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="16-9-carousel-mobile"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-semiconductor"
                              data-asset-name="hon-semiconductor.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Semiconductor"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="slide-1752_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-semiconductor:16-9-carousel-mobile"
                                  src={
                                    imageUrl
                                  }                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Semiconductor"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide__content-wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2
                          className="slide__subtitle"
                          title="Safety Is Our Top Priority For Your Peace Of Mind"
                        >
                          {data.card[0]?.title}
                        </h2>
                        <div className="slide__text">
                          <p>{data.card[0]?.summary}</p>
                        </div>
                        <div className="cta cta--tertiary">
                          <div
                            className="cmp-call-to-action"
                            data-analytics-v2="cta-v2-analytics"
                          >
                            <a
                              className="external-link "
                              target="_blank"
                              href="https://sps.honeywell.com/us/en/industries/manufacturing/semiconductor"
                              tabIndex={0}
                            >
                              <div className="anchor-text"> Learn More</div>
                            </a>
                          </div>
                        </div>
                        <div className="slide-pagination slide-pagination--desktop d-none d-md-block">
                          <span className="slide-number">1</span>
                          <span className="slide-frslash"> / </span>
                          <span className="slide-count">
                            <strong>3</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide sc--rows-four slick-slide"
                    data-slick-index={1}
                    aria-hidden="true"
                    style={{ width: 1600 }}
                    tabIndex={-1}
                  >
                    <div className="slide__container aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                      <div className="slide-pagination slide-pagination--mobile d-block d-sm-none">
                        <span className="slide-number">2</span>
                        <span className="slide-frslash"> / </span>
                        <span className="slide-count">
                          <strong>3</strong>
                        </span>
                      </div>
                      <div className="slide__image-container  aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className="image_desktop">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id="slide_284329359-9825"
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="4-3-carousel-desktop"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-gas-and-flame-detection-high-tech-gas-detection"
                              data-asset-name="hon-gas-and-flame-detection-high-tech-gas-detection.jpeg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Gas & Flame Detection"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="slide_284329359-9825_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-gas-and-flame-detection-high-tech-gas-detection:4-3-carousel-desktop"
                                  src="https://honeywell.scene7.com/is/image/honeywell/hon-gas-and-flame-detection-high-tech-gas-detection:4-3-carousel-desktop?wid=843&hei=632&dpr=off"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Gas & Flame Detection"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image_mobile">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id="slide_284329359-1668"
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="16-9-carousel-mobile"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-gas-and-flame-detection-high-tech-gas-detection"
                              data-asset-name="hon-gas-and-flame-detection-high-tech-gas-detection.jpeg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Gas & Flame Detection"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="slide_284329359-1668_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-gas-and-flame-detection-high-tech-gas-detection:16-9-carousel-mobile"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Gas & Flame Detection"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide__content-wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2
                          className="slide__subtitle"
                          title="Advanced Technologies For Advanced Detection"
                        >
                          Advanced Technologies For Advanced Detection
                        </h2>
                        <div className="slide__text">
                          <p>
                            Honeywell’s advanced gas detection range for High
                            Tech markets features technologies that detect
                            hundreds of gases, including hydrides and
                            trifluorides, helping to enhance safety.
                          </p>
                        </div>
                        <div className="cta cta--tertiary">
                          <div
                            className="cmp-call-to-action"
                            data-analytics-v2="cta-v2-analytics"
                          >
                            <a
                              className="external-link "
                              target="_blank"
                              href="https://sps.honeywell.com/us/en/products/safety/gas-and-flame-detection/high-tech-and-semiconductor"
                              tabIndex={-1}
                            >
                              <div className="anchor-text"> Learn More</div>
                            </a>
                          </div>
                        </div>
                        <div className="slide-pagination slide-pagination--desktop d-none d-md-block">
                          <span className="slide-number">2</span>
                          <span className="slide-frslash"> / </span>
                          <span className="slide-count">
                            <strong>3</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide sc--rows-four slick-slide"
                    data-slick-index={2}
                    aria-hidden="true"
                    style={{ width: 1600 }}
                    tabIndex={-1}
                  >
                    <div className="slide__container aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                      <div className="slide-pagination slide-pagination--mobile d-block d-sm-none">
                        <span className="slide-number">3</span>
                        <span className="slide-frslash"> / </span>
                        <span className="slide-count">
                          <strong>3</strong>
                        </span>
                      </div>
                      <div className="slide__image-container  aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className="image_desktop">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id="slide_1360618925-6663"
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="4-3-carousel-desktop"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-industrial-semiconductor-2880x1440"
                              data-asset-name="hon-industrial-semiconductor-2880x1440.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Electronic Materials"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="slide_1360618925-6663_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:4-3-carousel-desktop"
                                  src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:4-3-carousel-desktop?wid=843&hei=632&dpr=off"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Electronic Materials"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image_mobile">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id="slide_1360618925-4198"
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="16-9-carousel-mobile"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-industrial-semiconductor-2880x1440"
                              data-asset-name="hon-industrial-semiconductor-2880x1440.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Electronic Materials"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="slide_1360618925-4198_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:16-9-carousel-mobile"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Electronic Materials"
                                  style={{ width: "100%" }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide__content-wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2
                          className="slide__subtitle"
                          title="Electronic Materials"
                        >
                          Electronic Materials
                        </h2>
                        <div className="slide__text">
                          <p>
                            Providing critical materials that help enhance the
                            performance and productivity of your electronics
                            manufacturing processes.
                          </p>
                        </div>
                        <div className="cta cta--tertiary">
                          <div
                            className="cmp-call-to-action"
                            data-analytics-v2="cta-v2-analytics"
                          >
                            <a
                              className="external-link "
                              target="_blank"
                              href="https://advancedmaterials.honeywell.com/us/en/applications/electronic-materials"
                              tabIndex={-1}
                            >
                              <div className="anchor-text"> Learn More</div>
                            </a>
                          </div>
                        </div>
                        <div className="slide-pagination slide-pagination--desktop d-none d-md-block">
                          <span className="slide-number">3</span>
                          <span className="slide-frslash"> / </span>
                          <span className="slide-count">
                            <strong>3</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide sc--rows-four slick-slide slick-cloned"
                    data-slick-index={3}
                    id=""
                    aria-hidden="true"
                    style={{ width: 1600 }}
                    tabIndex={-1}
                  >
                    <div className="slide__container aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                      <div className="slide-pagination slide-pagination--mobile d-block d-sm-none">
                        <span className="slide-number">1</span>
                        <span className="slide-frslash"> / </span>
                        <span className="slide-count">
                          <strong>3</strong>
                        </span>
                      </div>
                      <div className="slide__image-container image-clickable aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className="image_desktop">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="4-3-carousel-desktop"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-semiconductor"
                              data-asset-name="hon-semiconductor.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Semiconductor"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-semiconductor:4-3-carousel-desktop"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image_mobile">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="16-9-carousel-mobile"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-semiconductor"
                              data-asset-name="hon-semiconductor.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                   
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-semiconductor:16-9-carousel-mobile"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                 
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide__content-wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2
                          className="slide__subtitle"
                          title="Safety Is Our Top Priority For Your Peace Of Mind"
                        >
                          Safety Is Our Top Priority For Your Peace Of Mind
                        </h2>
                        <div className="slide__text">
                          <p>
                            Help maintain your team’s safety with Honeywell’s
                            gas detection solutions. From installation support
                            to device repairs, we’ve got you covered for
                            real-time safety monitoring.
                          </p>
                        </div>
                        <div className="cta cta--tertiary">
                          <div
                            className="cmp-call-to-action"
                            data-analytics-v2="cta-v2-analytics"
                          >
                            <a
                              className="external-link "
                              target="_blank"
                              href="https://sps.honeywell.com/us/en/industries/manufacturing/semiconductor"
                              tabIndex={-1}
                            >
                              <div className="anchor-text"> Learn More</div>
                            </a>
                          </div>
                        </div>
                        <div className="slide-pagination slide-pagination--desktop d-none d-md-block">
                          <span className="slide-number">1</span>
                          <span className="slide-frslash"> / </span>
                          <span className="slide-count">
                            <strong>3</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide sc--rows-four slick-slide slick-cloned"
                    data-slick-index={4}
                    id=""
                    aria-hidden="true"
                    style={{ width: 1600 }}
                    tabIndex={-1}
                  >
                    <div className="slide__container aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                      <div className="slide-pagination slide-pagination--mobile d-block d-sm-none">
                        <span className="slide-number">2</span>
                        <span className="slide-frslash"> / </span>
                        <span className="slide-count">
                          <strong>3</strong>
                        </span>
                      </div>
                      <div className="slide__image-container  aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className="image_desktop">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="4-3-carousel-desktop"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-gas-and-flame-detection-high-tech-gas-detection"
                              data-asset-name="hon-gas-and-flame-detection-high-tech-gas-detection.jpeg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Gas & Flame Detection"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-gas-and-flame-detection-high-tech-gas-detection:4-3-carousel-desktop"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Gas & Flame Detection"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image_mobile">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="16-9-carousel-mobile"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-gas-and-flame-detection-high-tech-gas-detection"
                              data-asset-name="hon-gas-and-flame-detection-high-tech-gas-detection.jpeg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Gas & Flame Detection"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-gas-and-flame-detection-high-tech-gas-detection:16-9-carousel-mobile"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Gas & Flame Detection"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide__content-wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2
                          className="slide__subtitle"
                          title="Advanced Technologies For Advanced Detection"
                        >
                          Advanced Technologies For Advanced Detection
                        </h2>
                        <div className="slide__text">
                          <p>
                            Honeywell’s advanced gas detection range for High
                            Tech markets features technologies that detect
                            hundreds of gases, including hydrides and
                            trifluorides, helping to enhance safety.
                          </p>
                        </div>
                        <div className="cta cta--tertiary">
                          <div
                            className="cmp-call-to-action"
                            data-analytics-v2="cta-v2-analytics"
                          >
                            <a
                              className="external-link "
                              target="_blank"
                              href="https://sps.honeywell.com/us/en/products/safety/gas-and-flame-detection/high-tech-and-semiconductor"
                              tabIndex={-1}
                            >
                              <div className="anchor-text"> Learn More</div>
                            </a>
                          </div>
                        </div>
                        <div className="slide-pagination slide-pagination--desktop d-none d-md-block">
                          <span className="slide-number">2</span>
                          <span className="slide-frslash"> / </span>
                          <span className="slide-count">
                            <strong>3</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="slide sc--rows-four slick-slide slick-cloned"
                    data-slick-index={5}
                    id=""
                    aria-hidden="true"
                    style={{ width: 1600 }}
                    tabIndex={-1}
                  >
                    <div className="slide__container aem-Grid aem-Grid--default--12 aem-Grid--phone--12">
                      <div className="slide-pagination slide-pagination--mobile d-block d-sm-none">
                        <span className="slide-number">3</span>
                        <span className="slide-frslash"> / </span>
                        <span className="slide-count">
                          <strong>3</strong>
                        </span>
                      </div>
                      <div className="slide__image-container  aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <div className="image_desktop">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="4-3-carousel-desktop"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-industrial-semiconductor-2880x1440"
                              data-asset-name="hon-industrial-semiconductor-2880x1440.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Electronic Materials"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:4-3-carousel-desktop"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Electronic Materials"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="image_mobile">
                          {/*
<sly data-sly-call="" />
*/}
                          <div className="cq-dd-image ">
                            <div
                              id=""
                              data-current-page="/content/honeywellbt/us/en/industries/manufacturing"
                              data-image-style="16-9-carousel-mobile"
                              data-page-locale="en_us"
                              data-asset-path="honeywell/hon-industrial-semiconductor-2880x1440"
                              data-asset-name="hon-industrial-semiconductor-2880x1440.jpg"
                              data-asset-type="image"
                              data-viewer-path="https://honeywell.scene7.com/s7viewers/"
                              data-imageserver="https://honeywell.scene7.com/is/image/"
                              data-videoserver="https://honeywell.scene7.com/is/content/"
                              data-contenturl="//honeywell.scene7.com/is/content/"
                              data-wcmdisabled=""
                              data-dms7=""
                              data-mode="smartcrop"
                              data-alt="Electronic Materials"
                              data-istransparentpng="false"
                              className="lazy-load s7dm-dynamic-media"
                            >
                              <div className="s7responsiveContainer">
                                <img
                                  id="_resp"
                                  data-src="https://honeywell.scene7.com/is/image/honeywell/hon-industrial-semiconductor-2880x1440:16-9-carousel-mobile"
                                  src="https://honeywell.com/content/dam/placeholder-images/mosaic-1-1-placeholder.png"
                                  className="fluidimage lazy"
                                  data-mode="smartcrop"
                                  alt="Electronic Materials"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slide__content-wrapper aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                        <h2
                          className="slide__subtitle"
                          title="Electronic Materials"
                        >
                          Electronic Materials
                        </h2>
                        <div className="slide__text">
                          <p>
                            Providing critical materials that help enhance the
                            performance and productivity of your electronics
                            manufacturing processes.
                          </p>
                        </div>
                        <div className="cta cta--tertiary">
                          <div
                            className="cmp-call-to-action"
                            data-analytics-v2="cta-v2-analytics"
                          >
                            <a
                              className="external-link "
                              target="_blank"
                              href="https://advancedmaterials.honeywell.com/us/en/applications/electronic-materials"
                              tabIndex={-1}
                            >
                              <div className="anchor-text"> Learn More</div>
                            </a>
                          </div>
                        </div>
                        <div className="slide-pagination slide-pagination--desktop d-none d-md-block">
                          <span className="slide-number">3</span>
                          <span className="slide-frslash"> / </span>
                          <span className="slide-count">
                            <strong>3</strong>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="proxy-slick-buttons d-none">
              <button
                className="slick-prev prev-proxy slick-arrow"
                aria-label="Previous"
                type="button"
                style={{}}
              >
                Previous
              </button>
              <button
                className="slick-next next-proxy slick-arrow"
                aria-label="Next"
                type="button"
                style={{}}
              >
                Next
              </button>
            </div>
            <div className="slide-progress js-carousel-control">
              <span className="js-play-pause timer-icon icon-pause" />
            </div>
          </div>
          <div className="vidyard-video-holder"></div>
        </div>

        <div className="responsivegrid p-0 pb-small aem-GridColumn aem-GridColumn--default--12">
          <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 "></div>
        </div>
      </div>
    </div>
  );
}
