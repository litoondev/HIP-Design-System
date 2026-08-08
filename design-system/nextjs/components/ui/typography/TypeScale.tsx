import { ReactNode } from "react";

export interface TypeSpecRowProps {
  fontFamily: string;
  fontWeight: string | number;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  color?: string;
}

/** Small meta row under each type sample listing family/weight/size/line-height/letter-spacing(/color) */
export function TypeSpecRow({
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
  color,
}: TypeSpecRowProps) {
  return (
    <div className="flex gap-4 flex-wrap font-body text-[11px] text-gray-500 mt-1">
      <span>
        font-family: <b className="text-gray-700 font-semibold">{fontFamily}</b>
      </span>
      <span>
        font-weight: <b className="text-gray-700 font-semibold">{fontWeight}</b>
      </span>
      <span>
        font-size: <b className="text-gray-700 font-semibold">{fontSize}</b>
      </span>
      <span>
        line-height: <b className="text-gray-700 font-semibold">{lineHeight}</b>
      </span>
      <span>
        letter-spacing: <b className="text-gray-700 font-semibold">{letterSpacing}</b>
      </span>
      {color && (
        <span>
          color: <b className="text-gray-700 font-semibold">{color}</b>
        </span>
      )}
    </div>
  );
}

export interface TypeSampleProps extends TypeSpecRowProps {
  sampleClassName: string;
  children: ReactNode;
  extra?: ReactNode;
}

/** A single labeled type-scale row: the live text sample + its spec metadata underneath */
export function TypeSample({ sampleClassName, children, extra, ...spec }: TypeSampleProps) {
  return (
    <div className="mb-[18px]">
      {extra ? (
        <div className="flex items-baseline gap-3">
          <div className={sampleClassName}>{children}</div>
          {extra}
        </div>
      ) : (
        <div className={sampleClassName}>{children}</div>
      )}
      <TypeSpecRow {...spec} />
    </div>
  );
}
