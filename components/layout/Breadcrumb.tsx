import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
  breadcrumbTitleTwo?: string; // made optional for flexibility
}

export default function Breadcrumb({
  breadcrumbTitle,
  breadcrumbTitleTwo,
}: BreadcrumbProps) {
  return (
    <section className="breadcrumb-style1">
      <div className="breadcrumb-style1__inner">
        <div
          className="breadcrumb-style1-bg"
          style={{
            backgroundImage: "url(/assets/images/breadcrumb/breadcrumb-1.jpg)",
          }}
        ></div>

        <div className="container">
          <div className="inner-content">
            <div className="title">
              <h2>{breadcrumbTitle}</h2>
            </div>

            <div className="breadcrumb-menu">
              <ul className="clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>

                {breadcrumbTitleTwo && (
                  <>
                    <li>
                      <span className="icon-right-arrow"></span>
                    </li>
                    <li>{breadcrumbTitleTwo}</li>
                  </>
                )}

                <li>
                  <span className="icon-right-arrow"></span>
                </li>
                <li className="active">{breadcrumbTitle}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
