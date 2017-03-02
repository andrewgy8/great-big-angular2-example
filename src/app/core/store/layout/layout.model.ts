export interface BooksPageLayout {
  showSidenav: boolean;
};

export interface DebatePageLayout {
  editable: boolean;
  expanded: boolean;
  scrollY: number;
  isTouched: Function;
};

export interface HeroesDashboardLayout {
  heroSearchTerm: string
}

export interface Layout {
  booksPage: BooksPageLayout;
  debatePage: DebatePageLayout;
  heroesDashboardPage: HeroesDashboardLayout;
  msg: string;
}

export const initialDebatePage: DebatePageLayout = {
  editable: false,
  expanded: false,
  scrollY: 0,
  isTouched: function (claims) {
    let _touched = false;
    claims.forEach(claim => {
      claim.rebuttals.forEach(rebuttal => {
        if (rebuttal && rebuttal.isTouched()) {
          _touched = true;
        }
      });
    });
    return _touched;
  }
}

export const initialHeroesDashboardPage = {
  heroSearchTerm: ''
}


export const initialLayout: Layout = {
  booksPage: {
    showSidenav: false
  },
  debatePage: initialDebatePage,
  heroesDashboardPage: initialHeroesDashboardPage,
  msg: ''
}