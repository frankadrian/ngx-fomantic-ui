import { ITemplateRefContext } from "../../../misc/util/helpers/util"

export interface IResultContext<T> extends ITemplateRefContext<T> {
  query: string;
}
