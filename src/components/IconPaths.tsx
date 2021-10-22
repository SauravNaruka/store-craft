import iconStyles from '@styles/icon.module.scss'

export const MenuIconPath = () => (
  <path
    className={iconStyles.iconPrimaryColor}
    fillRule="evenodd"
    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
  />
)

export const CartIconPath = () => (
  <>
    <path
      className={iconStyles.iconPrimaryColor}
      d="M7 4h14a1 1 0 0 1 .9 1.45l-4 8a1 1 0 0 1-.9.55H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
    />
    <path
      className={iconStyles.iconPrimaryColor}
      d="M17.73 19a2 2 0 1 1-3.46 0H8.73a2 2 0 1 1-3.42-.08A3 3 0 0 1 5 13.17V4H3a1 1 0 1 1 0-2h3a1 1 0 0 1 1 1v10h11a1 1 0 0 1 0 2H6a1 1 0 0 0 0 2h12a1 1 0 0 1 0 2h-.27z"
    />
  </>
)

export const SearchIconPath = () => (
  <>
    <circle cx="10" cy="10" r="7" className={iconStyles.searchIconPrimary} />
    <path
      className={iconStyles.searchIconSecondary}
      d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
    />
  </>
)
