import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="mb-24 flexCenter">
      <div className='padding-container max-conatiner flex w-full flex-col gap-14'>
        <div className="flex flex-col justify-center items-start gap-[10%] md:flex-row">

          <Link href={'/'} className="md-10">
            <Image src={'/hilink-logo.svg'} alt="logo" height={30} width={75} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((cols) => (
              <FooterCols key={cols.title} title={cols.title}>
                <ul className="regular-14 flex-col flex gap-4 text-gray-30">
                  {cols.links.map((link) => (
                    <Link href={'/'} key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterCols>
            ))}
            
            <div className="flex flex-col gap-5">
              <FooterCols title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map(link => (
                  <Link href={'/'} key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                    <p className=" whitespace-nowrap">{link.label}</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
                  </Link>
                ))}
              </FooterCols>
            </div>

            <div className="flex flex-col gap-5">
              <FooterCols title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map(link => (
                    <Link href={'/'} key={link}>
                      <Image src={link} alt="logo" width={25} height={25} />
                    </Link>
                  ))}
                </ul>
              </FooterCols>
            </div>

          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">2024 Hilink | All rights reserved</p>
      </div>
    </footer>
  )
}

interface FooterProps {
  title: string;
  children: React.ReactNode;
}

const FooterCols =({ title, children } : FooterProps) => {
  return (  
    <div className=" flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Footer