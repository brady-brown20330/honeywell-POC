export default function TextCTA({ data }) {
  return (
    <div className="responsivegrid bg-light-gray p-30 aem-GridColumn--default--none aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--offset--default--0">
      <div className="aem-Grid aem-Grid--12 aem-Grid--default--12 aem-Grid--phone--12 ">
        <div className="sectiontitle section-title--h-medium text-left pt-30 pb-10 aem-GridColumn aem-GridColumn--default--12">
          {/*Anchor ID */}
          {/*Section title V1*/}
          <h2 className="section-title">{data.title}</h2>
          {/*Section title V2*/}
          {/*Section subtitle V1*/}
          {/*Section subtitle V2*/}
        </div>

        {data.cta.map((item, key) => {
          return (
            <div key={key} className="responsivegrid bg-light-gray p-30 aem-GridColumn--default--none aem-GridColumn--phone--12 aem-GridColumn--phone--newline aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--phone--0 aem-GridColumn--offset--default--0">
              <div className="aem-Grid aem-Grid--6 aem-Grid--default--6 aem-Grid--phone--6 ">
                <div className="text pt-10 aem-GridColumn--phone--6 aem-GridColumn aem-GridColumn--default--6">
                  <div className="cmp-text">
                    <p style={{ textAlign: "center" }}>
                      <b>{item.title}</b>
                    </p>
                    <p style={{ textAlign: "center" }}>{item.description}</p>
                  </div>
                </div>
                <div className="cta cta--secondary justify-content-center aem-GridColumn--phone--6 aem-GridColumn aem-GridColumn--default--6">
                  <div
                    className="cmp-call-to-action"
                    data-analytics-v2="cta-v2-analytics"
                  >
                    <a target="_self" href={item.cta.href}>
                      <div className="anchor-text">{item.cta.title}</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
