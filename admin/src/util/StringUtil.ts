export default class StringUtil {
  /**
   * 判断字符是否为空
   * @param str
   * @param trimSpace 是否去除空格
   * @return {boolean}
   */
  public static isEmpty(str: string, trimSpace: boolean = false): boolean {
    if (trimSpace) {
      str = str.trim();
    }
    return str == null || str.length == 0;
  }
}
