// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar("none");    // No registrar.
var DNS_CLOUDFLARE = NewDnsProvider("cloudflare");  // cloudflare DNS

// Domains:

DEFAULTS(
    DefaultTTL("1m")
);

D("actlab.org", REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A("@", "113.36.242.231"),
    A("autoconfig", "113.36.242.231"),
    A("www", "113.36.242.231"),

    A("lamp", "160.16.58.123"),
    A("www.lamp", "160.16.58.123"),

    A("stg", "160.251.151.157"),
    A("www.stg", "160.251.151.157"),

    A("stg3", "113.36.242.231"),
    A("www.stg3", "113.36.242.231"),
    NS("_acme-challenge.stg3", "ns1.lsv.jp."),
    NS("_acme-challenge.stg3", "ns2.lsv.jp."),

    MX("lamp", 5, "salmoncoyote7.sakura.ne.jp."),
    MX("www.lamp", 5, "salmoncoyote7.sakura.ne.jp."),
    MX("@", 10, "smtp.lsv.jp."),
    MX("sendgrid", 10, "mx.sendgrid.net."),
    MX("mail", 1, "aspmx.l.google.com."),
    MX("mail", 5, "ALT1.ASPMX.L.GOOGLE.COM."),
    MX("mail", 5, "ALT2.ASPMX.L.GOOGLE.COM."),
    MX("mail", 10, "ALT3.ASPMX.L.GOOGLE.COM."),
    MX("mail", 10, "ALT4.ASPMX.L.GOOGLE.COM."),

    TXT("@", "v=spf1 include:sendgrid.net include:_spf.mx.cloudflare.net ~all"),
    TXT("@", "10de176aa2"),
    TXT("*", "10de176aa2"),
    TXT("@", "google-site-verification=5-Av1k3BxIDJ_nqzZ2F7h2T37Ex7jIMOzeWIR7_ErHw"),
    TXT("*", "google-site-verification=5-Av1k3BxIDJ_nqzZ2F7h2T37Ex7jIMOzeWIR7_ErHw"),
    TXT("*", "actlaboratory"),
    TXT("@", "google-site-verification=ho7hHpbeIFf_lGd6l9QX4PT3deKKfbzEKA1wbT1E9mw"),
    TXT("*", "google-site-verification=ho7hHpbeIFf_lGd6l9QX4PT3deKKfbzEKA1wbT1E9mw"),
    TXT("*", "google-site-verification=esxrTlmStDPUVGkDvO4qSsmWvji3-f50AfW-psXrIgo"),
    TXT("@", "google-site-verification=esxrTlmStDPUVGkDvO4qSsmWvji3-f50AfW-psXrIgo"),
    TXT("sendgrid", "v=spf1 include:sendgrid.net ~all"),
    TXT("sg._domainkey", "k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCnjex8a/J19j4cP79OIrB7FccRAjdU4F32o3uGprX4ukE/gLkUZlFAXPqnC0cOcrWhjjem3wDpej/Co9TT99FKANthTO3Jn/NCwqd7c3TS+UsHR4atTFrQagdU4/09DceoOZ2Fx0ygHdVJdCd6vaIlXoSL/nHcR+WBAbaMkqiDawIDAQAB"),
    CNAME("click", "sendgrid.net."),
    CNAME("37371635", "sendgrid.net."),

    CNAME("mt65", "smtp.mailtrap.live."),
    CNAME("rwmt1._domainkey", "rwmt1.dkim.smtp.mailtrap.live."),
    CNAME("rwmt2._domainkey", "rwmt2.dkim.smtp.mailtrap.live."),
    TXT("_dmarc", "v=DMARC1; p=none; rua=mailto:235307dd801045efa1e7e714152d1263@dmarc-reports.cloudflare.net,mailto:dmarc@smtp-staging.mailtrap.net; ruf=mailto:dmarc@smtp-staging.mailtrap.net; rf=afrf; pct=100", TTL(1)),
	  CNAME("mt-link", "t.mailtrap.live."),

    // forward.actlab.org - Forward Email
    MX("forward", 10, "mx1.forwardemail.net."),
    MX("forward", 10, "mx2.forwardemail.net."),
    TXT("forward", "forward-email=QXVQT3RxVmVHcHpvbGdjWUxEU1RRWWF2cWlTY1NEbk1MNEQ0MDlWb3Z5TlNVOGZGSXBlV1VKemlkaVowNWxjU1VR"),
    // forward-emailからslackへの転送
    TXT("forward", "forward-email=QWlpUVc3ck9PSzhFZU45TGVaVS11TkFIMmxxSHVpYVRTaFdiZGNwakpvU0ZESXlHREttSEc5NFFHeGxPY2FjUWc2NTFfcXJOMXFuSVRsdkFJTEFOT1l2bEd4c2pqUGcwWDdxUlFtdWhkY3RIVXFYMkZPODNneE00bzY3T1E1YkZTS3BuS2x3RXJ2a2NreGV0NDBLdnljd2Q5UQ=="),
    TXT("forward", "forward-email=QWxubzA2V3VMbnFBaUFta3JjX2VidWgxUmV5b0hlRmYtQjZRajNEZG45U0RzZi12UGVYQzZTd2JsdTZXYmV5ODI5RldCYVFpdGcxQ2VUeHNzUnk1UVVFdTFzWF93ZzIwNmhabmxOa3FYMXZ5bkQwc2RyaVJwX3Fub3lEYlVIOHdZb0t4Qk1Rak9mOFRJTU02cDNhTm0teDA3UHVXNlE=")
);
