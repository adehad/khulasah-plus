export class NavModel {
  href: string;
  title: string;

  constructor({ href, title }: { href: string; title: string }) {
    this.href = href;
    this.title = title;
  }
}
