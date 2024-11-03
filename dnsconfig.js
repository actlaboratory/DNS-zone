// @ts-check
/// <reference path="types-dnscontrol.d.ts" />

var REG_NONE = NewRegistrar("none");    // No registrar.
var DNS_CLOUDFLARE = NewDnsProvider("cloudflare");  // cloudflare DNS

// Domains:

DEFAULTS(
    DefaultTTL("1m")
);

D("actlab.org", REG_NONE, DnsProvider(DNS_CLOUDFLARE),
    A("@", "160.251.151.230"),
    A("autoconfig", "160.251.151.230"),
    A("www", "160.251.151.230"),

    A("lamp", "160.16.58.123"),
    A("www.lamp", "160.16.58.123"),

    A("stg", "160.251.151.157"),
    A("www.stg", "160.251.151.157"),

    A("stg2", "85.131.192.5"),
    A("www.stg2", "85.131.192.5"),
    NS("_acme-challenge.stg2", "ns1.cloudfree.ne.jp."),
    NS("_acme-challenge.stg2", "ns2.cloudfree.ne.jp."),
    NS("_acme-challenge.www.stg2", "ns1.cloudfree.ne.jp."),
    NS("_acme-challenge.www.stg2", "ns2.cloudfree.ne.jp."),

    A("stg3", "113.36.242.231"),
    A("www.stg3", "113.36.242.231"),
    NS("_acme-challenge.stg3", "ns1.lsv.jp."),
    NS("_acme-challenge.stg3", "ns2.lsv.jp."),

    MX("lamp", 5, "salmoncoyote7.sakura.ne.jp."),
    MX("www.lamp", 5, "salmoncoyote7.sakura.ne.jp."),
    MX("@", 10, "@"),
    MX("sendgrid", 10, "mx.sendgrid.net."),
    MX("mail", 1, "aspmx.l.google.com."),
    MX("mail", 5, "ALT1.ASPMX.L.GOOGLE.COM."),
    MX("mail", 5, "ALT2.ASPMX.L.GOOGLE.COM."),
    MX("mail", 10, "ALT3.ASPMX.L.GOOGLE.COM."),
    MX("mail", 10, "ALT4.ASPMX.L.GOOGLE.COM."),

    TXT("@", "v=spf1 ip4:160.251.151.230 ip4:160.251.151.157 ~all"),
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
    CNAME("37371635", "sendgrid.net.")
);
