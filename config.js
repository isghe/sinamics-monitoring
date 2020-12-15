const drives = [
  { id: 1, name: "020-cc82010-Drive", ip: "10.10.252.70" },
  { id: 2, name: "021-cc82011-Drive", ip: "10.10.252.71" },
  { id: 3, name: "022-rc82012-Drive", ip: "10.10.252.72" },
  { id: 4, name: "023-cc82012-Drive", ip: "10.10.252.74" },
  { id: 5, name: "024-hu82012-Drive", ip: "10.10.252.73" },
  { id: 6, name: "025-rc82013-Drive", ip: "10.10.252.75" },
  { id: 7, name: "026-rc82014-Drive", ip: "10.10.252.76" },
  { id: 8, name: "028-rc82015-Drive", ip: "10.10.252.78" },
  { id: 9, name: "029-cc82015-Drive", ip: "10.10.252.80" },
  { id: 10010, name: "030-hu82015-Drive", ip: "10.10.252.79" },
  { id: 10011, name: "040-cc82020-Drive", ip: "10.10.252.81" },
  { id: 10013, name: "045-cc82032-Drive", ip: "10.10.252.84" },
  { id: 10014, name: "046-cc82035-Drive", ip: "10.10.252.85" },
  { id: 10015, name: "047-cc82038-Drive", ip: "10.10.252.86" },
  { id: 10016, name: "050-cc82042-Drive", ip: "10.10.252.87" },
  { id: 10017, name: "051-cc82045-Drive", ip: "10.10.252.88" },
  { id: 10018, name: "052-cc82048-Drive", ip: "10.10.252.89" },
  { id: 10019, name: "055-cc82050-Drive", ip: "10.10.252.90" },
  { id: 10020, name: "059-tl82060-Drive", ip: "10.10.252.51" },
  { id: 10021, name: "062-cc820601-Drive", ip: "10.10.252.52" },
  { id: 10022, name: "070-cc82070-Drive", ip: "10.10.252.92" },
  { id: 10023, name: "072-cc82080-Drive", ip: "10.10.252.97" },
  { id: 10024, name: "076-tl82090-Drive", ip: "10.10.252.53" },
  { id: 10025, name: "079-cc820901-Drive", ip: "10.10.252.54" },
  { id: 10026, name: "085-cc82210-Drive", ip: "10.10.252.93" },
  { id: 10027, name: "086-cc82220-Drive", ip: "10.10.252.98" },
  { id: 10028, name: "087-cc82310-Drive", ip: "10.10.252.94" },
  { id: 10029, name: "088-cc82320-Drive", ip: "10.10.252.99" },
  { id: 10030, name: "089-cc82401-Drive", ip: "10.10.252.102" },
  { id: 10031, name: "090-cc82410-Drive", ip: "10.10.252.95" },
  { id: 10032, name: "091-cc82420-Drive", ip: "10.10.252.100" },
  { id: 10033, name: "120-cc82450-Drive", ip: "10.10.252.20" },
  { id: 10034, name: "121-rc82451-Drive", ip: "10.10.252.21" },
  { id: 10035, name: "122-cc82451-Drive", ip: "10.10.252.23" },
  { id: 10036, name: "123-hu82451-Drive", ip: "10.10.252.22" },
  { id: 10037, name: "124-rc82452-Drive", ip: "10.10.252.24" },
  { id: 10038, name: "125-rc82500-Drive", ip: "10.10.252.26" },
  { id: 10039, name: "126-tl82500-Drive", ip: "10.10.252.27" },
  { id: 10040, name: "128-rc82510-Drive", ip: "10.10.252.29" },
  { id: 10041, name: "129-rc82512-Drive", ip: "10.10.252.31" },
  { id: 10042, name: "130-rc82514-Drive", ip: "10.10.252.32" },
  { id: 10043, name: "131-rc82516-Drive", ip: "10.10.252.33" },
  { id: 10044, name: "132-rc82518-Drive", ip: "10.10.252.34" },
  { id: 10045, name: "133-rc82521-Drive", ip: "10.10.252.36" },

  { id: 111, name: "111-bc80202-Drive", ip: "192.168.156.100" },
  { id: 112, name: "112-rc80201-Drive", ip: "192.168.156.102" },
  { id: 113, name: "113-rc80200-Drive", ip: "192.168.156.103" },
  { id: 115, name: "115-rc80210-Drive", ip: "192.168.156.104" },
  { id: 116, name: "116-tl80210-Drive", ip: "192.168.156.105" },
  { id: 118, name: "118-rc80220-Drive", ip: "192.168.156.106" },
  { id: 119, name: "119-rc80221-Drive", ip: "192.168.156.107" },
  { id: 120, name: "120-rc80222-Drive", ip: "192.168.156.108" },
  { id: 121, name: "121-rc80223-Drive", ip: "192.168.156.109" },
  { id: 122, name: "122-rc80230-Drive", ip: "192.168.156.110" },
  { id: 123, name: "123-tt80230-Drive", ip: "192.168.156.111" },
  { id: 124, name: "124-rc80231-Drive", ip: "192.168.156.112" },
  { id: 125, name: "125-rc80232-Drive", ip: "192.168.156.113" },
  { id: 126, name: "126-rc80233-Drive", ip: "192.168.156.114" },
  { id: 127, name: "127-rc80234-Drive", ip: "192.168.156.115" },
  { id: 128, name: "128-rc80235-Drive", ip: "192.168.156.116" },
  { id: 129, name: "129-rc80236-Drive", ip: "192.168.156.117" },
  { id: 130, name: "130-rc80237-Drive", ip: "192.168.156.118" },
  { id: 131, name: "131-rc80240-Drive", ip: "192.168.156.123" },
  { id: 132, name: "132-tt80240-Drive", ip: "192.168.156.124" },
  { id: 133, name: "133-rc80241-Drive", ip: "192.168.156.125" },
  { id: 134, name: "134-rc80242-Drive", ip: "192.168.156.126" },
  { id: 135, name: "135-rc80243-Drive", ip: "192.168.156.127" },
  { id: 136, name: "136-rc80244-Drive", ip: "192.168.156.128" },
  { id: 139, name: "139-rc80245-Drive", ip: "192.168.156.129" },
  { id: 140, name: "140-rc80246-Drive", ip: "192.168.156.130" },
  { id: 141, name: "141-rc80247-Drive", ip: "192.168.156.131" },
  { id: 142, name: "142-rc80248-Drive", ip: "192.168.156.133" },
  { id: 143, name: "143-rc80249-Drive", ip: "192.168.156.134" },
  { id: 145, name: "145-rc80250-Drive", ip: "192.168.156.135" },
  { id: 147, name: "147-hu80250-Drive", ip: "192.168.156.136" },
  { id: 146, name: "146-cc80250-Drive", ip: "192.168.156.137" },
  { id: 148, name: "148-rc80251-Drive", ip: "192.168.156.138" },
  { id: 150, name: "150-cc80261-Drive", ip: "192.168.156.139" },
  { id: 168, name: "168-cc80291-Drive", ip: "192.168.156.140" },
  { id: 170, name: "170-rc80300-Drive", ip: "192.168.156.141" },
  { id: 172, name: "172-hu80300-Drive", ip: "192.168.156.142" },
  { id: 171, name: "171-cc80300-Drive", ip: "192.168.156.143" },
  { id: 173, name: "173-rc80301-Drive", ip: "192.168.156.144" },
  { id: 174, name: "174-rc80302-Drive", ip: "192.168.156.145" },
  { id: 175, name: "175-rc80303-Drive", ip: "192.168.156.146" },
  { id: 176, name: "176-rc80304-Drive", ip: "192.168.156.147" },
  { id: 177, name: "177-rc80305-Drive", ip: "192.168.156.148" },
  { id: 336, name: "336-rc80533-Drive", ip: "192.168.156.150" },
  { id: 337, name: "337-rc80534-Drive", ip: "192.168.156.151" },
  { id: 338, name: "338-rc80535-Drive", ip: "192.168.156.152" },
  { id: 340, name: "340-rc80540-Drive", ip: "192.168.156.154" },
  { id: 341, name: "341-rc80541-Drive", ip: "192.168.156.155" },
  { id: 342, name: "342-rc80542-Drive", ip: "192.168.156.156" },
  { id: 343, name: "343-rc80543-Drive", ip: "192.168.156.157" },
  { id: 344, name: "344-rc80544-Drive", ip: "192.168.156.158" },
  { id: 345, name: "345-rc80545-Drive", ip: "192.168.156.159" },
  { id: 346, name: "346-rc80546-Drive", ip: "192.168.156.160" },
  { id: 348, name: "348-rc80547-Drive", ip: "192.168.156.161" },
  { id: 349, name: "349-tt80547-Drive", ip: "192.168.156.162" },
  { id: 274, name: "274-rc80422-Drive", ip: "192.168.156.164" },
  { id: 275, name: "275-rc80423-Drive", ip: "192.168.156.165" },
  { id: 276, name: "276-rc80424-Drive", ip: "192.168.156.166" },
  { id: 277, name: "277-rc80425-Drive", ip: "192.168.156.167" },
  { id: 278, name: "278-rc80426-Drive", ip: "192.168.156.168" },
  { id: 285, name: "285-rc80430-Drive", ip: "192.168.156.170" },
  { id: 286, name: "286-tl80430-Drive", ip: "192.168.156.171" },
  { id: 290, name: "290-rc80440-Drive", ip: "192.168.156.172" },
  { id: 291, name: "291-rc80441-Drive", ip: "192.168.156.173" },
  { id: 292, name: "292-rc80442-Drive", ip: "192.168.156.174" },
  { id: 293, name: "293-rc80443-Drive", ip: "192.168.156.175" },
  { id: 294, name: "294-rc80444-Drive", ip: "192.168.156.176" },
  { id: 300, name: "300-rc80450-Drive", ip: "192.168.156.177" },
  { id: 302, name: "302-rc80451-Drive", ip: "192.168.156.178" },
  { id: 303, name: "303-rc80452-Drive", ip: "192.168.156.179" },
  { id: 304, name: "304-rc80453-Drive", ip: "192.168.156.180" },
  { id: 305, name: "305-rc80454-Drive", ip: "192.168.156.181" },
  { id: 180, name: "180-rc80310-Drive", ip: "192.168.156.189" },
  { id: 181, name: "181-tl80310-Drive", ip: "192.168.156.190" },
  { id: 185, name: "185-rc80321-Drive", ip: "192.168.156.191" },
  { id: 186, name: "186-rc80322-Drive", ip: "192.168.156.192" },
  { id: 187, name: "187-rc80323-Drive", ip: "192.168.156.193" },
  { id: 188, name: "188-rc80324-Drive", ip: "192.168.156.194" },
  { id: 190, name: "190-hu80324-Drive", ip: "192.168.156.195" },
  { id: 189, name: "189-cc80324-Drive", ip: "192.168.156.196" },
  { id: 191, name: "191-rc80325-Drive", ip: "192.168.156.197" },
  { id: 195, name: "195-cc80331-Drive", ip: "192.168.156.198" },
  { id: 220, name: "220-cc80361-Drive", ip: "192.168.156.199" },
  { id: 230, name: "230-rc80370-Drive", ip: "192.168.156.200" },
  { id: 232, name: "232-hu80370-Drive", ip: "192.168.156.201" },
  { id: 231, name: "231-cc80370-Drive", ip: "192.168.156.202" },
  { id: 233, name: "233-rc80371-Drive", ip: "192.168.156.203" },
  { id: 235, name: "235-rc80380-Drive", ip: "192.168.156.205" },
  { id: 236, name: "236-tl80380-Drive", ip: "192.168.156.206" },
  { id: 239, name: "239-rc80390-Drive", ip: "192.168.156.208" },
  { id: 240, name: "240-rc80391-Drive", ip: "192.168.156.209" },
  { id: 241, name: "241-rc80392-Drive", ip: "192.168.156.210" },
  { id: 242, name: "242-rc80393-Drive", ip: "192.168.156.211" },
  { id: 243, name: "243-rc80394-Drive", ip: "192.168.156.212" },
  { id: 244, name: "244-rc80395-Drive", ip: "192.168.156.213" },
  { id: 245, name: "245-rc80396-Drive", ip: "192.168.156.214" },
  { id: 246, name: "246-rc80397-Drive", ip: "192.168.156.215" },
  { id: 248, name: "248-rc80398-Drive", ip: "192.168.156.216" },
  { id: 249, name: "249-rc80399-Drive", ip: "192.168.156.217" },
  { id: 310, name: "310-rc80500-Drive", ip: "192.168.156.219" },
  { id: 311, name: "311-rc80501-Drive", ip: "192.168.156.220" },
  { id: 312, name: "312-rc80502-Drive", ip: "192.168.156.221" },
  { id: 313, name: "313-rc80503-Drive", ip: "192.168.156.222" },
  { id: 314, name: "314-rc80504-Drive", ip: "192.168.156.223" },
  { id: 315, name: "315-rc80505-Drive", ip: "192.168.156.224" },
  { id: 318, name: "318-rc80510-Drive", ip: "192.168.156.225" },
  { id: 319, name: "319-rc80511-Drive", ip: "192.168.156.226" },
  { id: 320, name: "320-rc80512-Drive", ip: "192.168.156.227" },
  { id: 321, name: "321-rc80513-Drive", ip: "192.168.156.228" },
  { id: 322, name: "322-rc80514-Drive", ip: "192.168.156.229" },
  { id: 325, name: "325-rc80520-Drive", ip: "192.168.156.231" },
  { id: 326, name: "326-rc80521-Drive", ip: "192.168.156.232" },
  { id: 327, name: "327-rc80522-Drive", ip: "192.168.156.233" },
  { id: 328, name: "328-rc80523-Drive", ip: "192.168.156.234" },
  { id: 329, name: "329-rc80524-Drive", ip: "192.168.156.235" },
  { id: 330, name: "330-rc80525-Drive", ip: "192.168.156.236" },
  { id: 331, name: "331-rc80526-Drive", ip: "192.168.156.237" },
  { id: 333, name: "333-rc80530-Drive", ip: "192.168.156.238" },
  { id: 334, name: "334-rc80531-Drive", ip: "192.168.156.239" },
  { id: 335, name: "335-rc80532-Drive", ip: "192.168.156.240" },
  { id: 35, name: "035-rc80030-Drive", ip: "192.168.156.3" },
  { id: 36, name: "036-rc80031-Drive", ip: "192.168.156.4" },
  { id: 20, name: "020-bc80010-Drive", ip: "192.168.156.45" },
  { id: 21, name: "021-rc80011-Drive", ip: "192.168.156.46" },
  { id: 22, name: "022-tt80011-Drive", ip: "192.168.156.47" },
  { id: 23, name: "023-rc80012-Drive", ip: "192.168.156.48" },
  { id: 26, name: "026-bc80020-Drive", ip: "192.168.156.49" },
  { id: 37, name: "037-tl80030-Drive", ip: "192.168.156.5" },
  { id: 27, name: "027-rc80021-Drive", ip: "192.168.156.50" },
  { id: 28, name: "028-tt80021-Drive", ip: "192.168.156.51" },
  { id: 29, name: "029-rc80022-Drive", ip: "192.168.156.52" },
  { id: 30, name: "030-rc80023-Drive", ip: "192.168.156.53" },
  { id: 31, name: "031-rc80025-Drive", ip: "192.168.156.54" },
  { id: 32, name: "032-rc80027-Drive", ip: "192.168.156.55" },
  { id: 40, name: "040-rc80040-Drive", ip: "192.168.156.56" },
  { id: 41, name: "041-rc80041-Drive", ip: "192.168.156.57" },
  { id: 43, name: "043-dc80041-Drive", ip: "192.168.156.58" },
  { id: 45, name: "045-rc80050-Drive", ip: "192.168.156.59" },
  { id: 427, name: "427-tl80650-Drive", ip: "192.168.156.6" },
  { id: 46, name: "046-rc80051-Drive", ip: "192.168.156.60" },
  { id: 47, name: "047-rc80052-Drive", ip: "192.168.156.61" },
  { id: 48, name: "048-rc80053-Drive", ip: "192.168.156.62" },
  { id: 51, name: "051-rc80060-Drive", ip: "192.168.156.63" },
  { id: 59, name: "059-rc80061-Drive", ip: "192.168.156.65" },
  { id: 63, name: "063-rc80070-Drive", ip: "192.168.156.66" },
  { id: 64, name: "064-tc80070-Drive", ip: "192.168.156.67" },
  { id: 65, name: "065-rc80071-Drive", ip: "192.168.156.68" },
  { id: 66, name: "066-rc80072-Drive", ip: "192.168.156.69" },
  { id: 425, name: "425-rc80650-Drive", ip: "192.168.156.7" },
  { id: 67, name: "067-tc80072-Drive", ip: "192.168.156.70" },
  { id: 68, name: "068-rc80073-Drive", ip: "192.168.156.71" },
  { id: 71, name: "071-rc80080-Drive", ip: "192.168.156.72" },
  { id: 75, name: "075-bc80090-Drive", ip: "192.168.156.74" },
  { id: 76, name: "076-rc80091-Drive", ip: "192.168.156.75" },
  { id: 78, name: "078-dc80091-Drive", ip: "192.168.156.76" },
  { id: 082, name: "082-rc80101-Drive", ip: "192.168.156.77" },
  { id: 083, name: "083-rc80102-Drive", ip: "192.168.156.78" },
  { id: 086, name: "086-rc80103-Drive", ip: "192.168.156.79" },
  { id: 426, name: "426-tt80650-Drive", ip: "192.168.156.8" },
  { id: 092, name: "092-rc80104-Drive", ip: "192.168.156.80" },
  { id: 095, name: "095-rc80110-Drive", ip: "192.168.156.81" },
  { id: 103, name: "103-rc80111-Drive", ip: "192.168.156.82" },
  { id: 107, name: "107-rc80120-Drive", ip: "192.168.156.83" },
  { id: 108, name: "108-rc80121-Drive", ip: "192.168.156.84" },
  { id: 109, name: "109-rc80122-Drive", ip: "192.168.156.85" },
  { id: 252, name: "252-rc80400-Drive", ip: "192.168.157.1" },
  { id: 263, name: "263-rc80411-Drive", ip: "192.168.157.10" },
  { id: 380, name: "380-tt80594-Drive", ip: "192.168.157.100" },
  { id: 385, name: "385-rc80600-Drive", ip: "192.168.157.101" },
  { id: 386, name: "386-rc80601-Drive", ip: "192.168.157.102" },
  { id: 387, name: "387-rc80602-Drive", ip: "192.168.157.103" },
  { id: 388, name: "388-rc80603-Drive", ip: "192.168.157.104" },
  { id: 389, name: "389-rc80604-Drive", ip: "192.168.157.105" },
  { id: 390, name: "390-rc80605-Drive", ip: "192.168.157.106" },
  { id: 391, name: "391-rc80606-Drive", ip: "192.168.157.107" },
  { id: 392, name: "392-rc80607-Drive", ip: "192.168.157.109" },
  { id: 264, name: "264-rc80412-Drive", ip: "192.168.157.11" },
  { id: 393, name: "393-tt80607-Drive", ip: "192.168.157.110" },
  { id: 398, name: "398-rc80610-Drive", ip: "192.168.157.111" },
  { id: 399, name: "399-rc80611-Drive", ip: "192.168.157.112" },
  { id: 400, name: "400-rc80612-Drive", ip: "192.168.157.113" },
  { id: 402, name: "402-rc80620-Drive", ip: "192.168.157.114" },
  { id: 403, name: "403-tt80620-Drive", ip: "192.168.157.115" },
  { id: 404, name: "404-rc80630-Drive", ip: "192.168.157.116" },
  { id: 407, name: "407-rc80631-Drive", ip: "192.168.157.117" },
  { id: 408, name: "408-rc80632-Drive", ip: "192.168.157.118" },
  { id: 409, name: "409-rc80633-Drive", ip: "192.168.157.119" },
  { id: 265, name: "265-rc80413-Drive", ip: "192.168.157.12" },
  { id: 410, name: "410-rc80634-Drive", ip: "192.168.157.120" },
  { id: 411, name: "411-rc80635-Drive", ip: "192.168.157.121" },
  { id: 412, name: "412-rc80636-Drive", ip: "192.168.157.122" },
  { id: 413, name: "413-rc80637-Drive", ip: "192.168.157.123" },
  { id: 415, name: "415-rc80640-Drive", ip: "192.168.157.124" },
  { id: 416, name: "416-rc80641-Drive", ip: "192.168.157.125" },
  { id: 417, name: "417-rc80642-Drive", ip: "192.168.157.126" },
  { id: 418, name: "418-rc80643-Drive", ip: "192.168.157.127" },
  { id: 419, name: "419-rc80644-Drive", ip: "192.168.157.128" },
  { id: 420, name: "420-rc80645-Drive", ip: "192.168.157.129" },
  { id: 266, name: "266-rc80414-Drive", ip: "192.168.157.13" },
  { id: 421, name: "421-rc80646-Drive", ip: "192.168.157.130" },
  { id: 422, name: "422-rc80647-Drive", ip: "192.168.157.131" },
  { id: 423, name: "423-rc80648-Drive", ip: "192.168.157.132" },
  { id: 450, name: "450-dc80690-Drive", ip: "192.168.157.134" },
  { id: 432, name: "432-dc80660-Drive", ip: "192.168.157.135" },
  { id: 434, name: "434-rc80660-Drive", ip: "192.168.157.136" },
  { id: 435, name: "435-rc80661-Drive", ip: "192.168.157.137" },
  { id: 437, name: "437-dc80670-Drive", ip: "192.168.157.139" },
  { id: 267, name: "267-rc80415-Drive", ip: "192.168.157.14" },
  { id: 439, name: "439-rc80670-Drive", ip: "192.168.157.140" },
  { id: 440, name: "440-rc80671-Drive", ip: "192.168.157.141" },
  { id: 442, name: "442-rc80680-Drive", ip: "192.168.157.142" },
  { id: 443, name: "443-rc80681-Drive", ip: "192.168.157.143" },
  { id: 268, name: "268-rc80416-Drive", ip: "192.168.157.15" },
  { id: 272, name: "272-rc80420-Drive", ip: "192.168.157.16" },
  { id: 273, name: "273-rc80421-Drive", ip: "192.168.157.17" },
  { id: 253, name: "253-rc80401-Drive", ip: "192.168.157.2" },
  { id: 152, name: "152-tl80270-Drive", ip: "192.168.157.22" },
  { id: 153, name: "153-cc80270-Drive", ip: "192.168.157.23" },
  { id: 158, name: "158-tl80280-Drive", ip: "192.168.157.24" },
  { id: 162, name: "162-cc80280-Drive", ip: "192.168.157.25" },
  { id: 255, name: "255-rc80402-Drive", ip: "192.168.157.3" },
  { id: 460, name: "460-cc81110-Drive", ip: "192.168.157.31" },
  { id: 465, name: "465-cc81120-Drive", ip: "192.168.157.32" },
  { id: 470, name: "470-cc81130-Drive", ip: "192.168.157.33" },
  { id: 475, name: "475-cc81140-Drive", ip: "192.168.157.34" },
  { id: 480, name: "480-cc81150-Drive", ip: "192.168.157.35" },
  { id: 485, name: "485-cc81210-Drive", ip: "192.168.157.37" },
  { id: 490, name: "490-cc81220-Drive", ip: "192.168.157.38" },
  { id: 495, name: "495-cc81230-Drive", ip: "192.168.157.39" },
  { id: 256, name: "256-rc80403-Drive", ip: "192.168.157.4" },
  { id: 500, name: "500-cc81240-Drive", ip: "192.168.157.40" },
  { id: 505, name: "505-cc81250-Drive", ip: "192.168.157.41" },
  { id: 200, name: "200-tl80340-Drive", ip: "192.168.157.44" },
  { id: 201, name: "201-cc80340-Drive", ip: "192.168.157.45" },
  { id: 210, name: "210-tl80350-Drive", ip: "192.168.157.46" },
  { id: 211, name: "211-cc80350-Drive", ip: "192.168.157.47" },
  { id: 257, name: "257-rc80404-Drive", ip: "192.168.157.5" },
  { id: 510, name: "510-cc81310-Drive", ip: "192.168.157.53" },
  { id: 515, name: "515-cc81320-Drive", ip: "192.168.157.54" },
  { id: 520, name: "520-cc81330-Drive", ip: "192.168.157.55" },
  { id: 525, name: "525-cc81340-Drive", ip: "192.168.157.56" },
  { id: 530, name: "530-cc81350-Drive", ip: "192.168.157.57" },
  { id: 535, name: "535-cc81410-Drive", ip: "192.168.157.59" },
  { id: 258, name: "258-rc80405-Drive", ip: "192.168.157.6" },
  { id: 540, name: "540-cc81420-Drive", ip: "192.168.157.60" },
  { id: 545, name: "545-cc81430-Drive", ip: "192.168.157.61" },
  { id: 550, name: "550-cc81440-Drive", ip: "192.168.157.62" },
  { id: 555, name: "555-cc81450-Drive", ip: "192.168.157.63" },
  { id: 360, name: "360-rc80560-Drive", ip: "192.168.157.66" },
  { id: 361, name: "361-tl80560-Drive", ip: "192.168.157.67" },
  { id: 259, name: "259-rc80406-Drive", ip: "192.168.157.7" },
  { id: 352, name: "352-rc80550-Drive", ip: "192.168.157.79" },
  { id: 353, name: "353-rc80551-Drive", ip: "192.168.157.80" },
  { id: 354, name: "354-rc80552-Drive", ip: "192.168.157.81" },
  { id: 355, name: "355-rc80553-Drive", ip: "192.168.157.82" },
  { id: 356, name: "356-rc80554-Drive", ip: "192.168.157.83" },
  { id: 357, name: "357-rc80555-Drive", ip: "192.168.157.84" },
  { id: 358, name: "358-rc80556-Drive", ip: "192.168.157.85" },
  { id: 365, name: "365-rc80570-Drive", ip: "192.168.157.87" },
  { id: 366, name: "366-rc80571-Drive", ip: "192.168.157.88" },
  { id: 262, name: "262-rc80410-Drive", ip: "192.168.157.9" },
  { id: 370, name: "370-rc80580-Drive", ip: "192.168.157.90" },
  { id: 371, name: "371-rc80581-Drive", ip: "192.168.157.91" },
  { id: 372, name: "372-rc80582-Drive", ip: "192.168.157.92" },
  { id: 373, name: "373-tt80582-Drive", ip: "192.168.157.93" },
  { id: 375, name: "375-rc80590-Drive", ip: "192.168.157.94" },
  { id: 376, name: "376-rc80591-Drive", ip: "192.168.157.95" },
  { id: 377, name: "377-rc80592-Drive", ip: "192.168.157.96" },
  { id: 378, name: "378-rc80593-Drive", ip: "192.168.157.97" },
  { id: 379, name: "379-rc80594-Drive", ip: "192.168.157.99" },

  { id: 600, name: "600-rc81574-Drive", ip: "192.168.158.77" },
  { id: 601, name: "601-rc81575-Drive", ip: "192.168.158.78" },
  { id: 610, name: "610-rc81600-Drive", ip: "192.168.158.80" },
  { id: 611, name: "611-rc81601-Drive", ip: "192.168.158.82" },
  { id: 612, name: "612-rc81602-Drive", ip: "192.168.158.83" },
  { id: 613, name: "613-rc81603-Drive", ip: "192.168.158.84" },
  { id: 615, name: "615-rc81609-Drive", ip: "192.168.158.85" },
  { id: 620, name: "620-cc81610-Drive", ip: "192.168.158.89" },
  { id: 621, name: "621-rc81610-Drive", ip: "192.168.158.87" },
  { id: 622, name: "622-hu81610-Drive", ip: "192.168.158.88" },
  { id: 623, name: "623-cc81612-Drive", ip: "192.168.158.90" },
  { id: 624, name: "624-dc81610-Drive", ip: "192.168.158.91" },
  { id: 630, name: "630-cc81613-Drive", ip: "192.168.158.94" },
  { id: 631, name: "631-rc81613-Drive", ip: "192.168.158.92" },
  { id: 632, name: "632-hu81613-Drive", ip: "192.168.158.93" },
  { id: 633, name: "633-cc81615-Drive", ip: "192.168.158.95" },
  { id: 634, name: "634-dc81613-Drive", ip: "192.168.158.96" },
  { id: 640, name: "640-cc81616-Drive", ip: "192.168.158.99" },
  { id: 641, name: "641-rc81616-Drive", ip: "192.168.158.97" },
  { id: 642, name: "642-hu81616-Drive", ip: "192.168.158.98" },
  { id: 643, name: "643-cc81618-Drive", ip: "192.168.158.100" },
  { id: 644, name: "644-dc81616-Drive", ip: "192.168.158.101" },
  { id: 650, name: "650-cc81620-Drive", ip: "192.168.158.104" },
  { id: 651, name: "651-rc81620-Drive", ip: "192.168.158.102" },
  { id: 652, name: "652-hu81620-Drive", ip: "192.168.158.103" },
  { id: 653, name: "653-cc81622-Drive", ip: "192.168.158.105" },
  { id: 654, name: "654-dc81620-Drive", ip: "192.168.158.106" },
  { id: 660, name: "660-cc81623-Drive", ip: "192.168.158.109" },
  { id: 661, name: "661-rc81623-Drive", ip: "192.168.158.107" },
  { id: 662, name: "662-hu81623-Drive", ip: "192.168.158.108" },
  { id: 663, name: "663-cc81625-Drive", ip: "192.168.158.110" },
  { id: 664, name: "664-dc81623-Drive", ip: "192.168.158.111" },
  { id: 670, name: "670-cc81626-Drive", ip: "192.168.158.114" },
  { id: 671, name: "671-rc81626-Drive", ip: "192.168.158.112" },
  { id: 672, name: "672-hu81626-Drive", ip: "192.168.158.113" },
  { id: 673, name: "673-cc81628-Drive", ip: "192.168.158.115" },
  { id: 674, name: "674-dc81626-Drive", ip: "192.168.158.116" },
  { id: 680, name: "680-cc81630-Drive", ip: "192.168.158.119" },
  { id: 681, name: "681-rc81630-Drive", ip: "192.168.158.117" },
  { id: 682, name: "682-hu81630-Drive", ip: "192.168.158.118" },
  { id: 683, name: "683-cc81632-Drive", ip: "192.168.158.120" },
  { id: 684, name: "684-dc81630-Drive", ip: "192.168.158.121" },
  { id: 690, name: "690-cc81633-Drive", ip: "192.168.158.124" },
  { id: 691, name: "691-rc81633-Drive", ip: "192.168.158.122" },
  { id: 692, name: "692-hu81633-Drive", ip: "192.168.158.123" },
  { id: 693, name: "693-cc81635-Drive", ip: "192.168.158.125" },
  { id: 694, name: "694-dc81633-Drive", ip: "192.168.158.126" },
  { id: 700, name: "700-cc81636-Drive", ip: "192.168.158.129" },
  { id: 701, name: "701-rc81636-Drive", ip: "192.168.158.127" },
  { id: 702, name: "702-hu81636-Drive", ip: "192.168.158.128" },
  { id: 703, name: "703-cc81638-Drive", ip: "192.168.158.130" },
  { id: 705, name: "705-rc81640-Drive", ip: "192.168.158.133" },
  { id: 710, name: "710-rc81650-Drive", ip: "192.168.158.134" },
  { id: 711, name: "711-tl81650-Drive", ip: "192.168.158.135" },
  { id: 720, name: "720-rc81660-Drive", ip: "192.168.158.137" },
  { id: 721, name: "721-rc81661-Drive", ip: "192.168.158.138" },
  { id: 722, name: "722-rc80701-Drive", ip: "192.168.157.167" },
  { id: 723, name: "723-rc80700-Drive", ip: "192.168.157.166" },
  { id: 724, name: "724-rc81531-Drive", ip: "192.168.157.163" },
  { id: 725, name: "725-tt81531-Drive", ip: "192.168.157.164" },
  { id: 726, name: "726-rc81530-Drive", ip: "192.168.157.162" },
  { id: 727, name: "727-rc81540-Drive", ip: "192.168.157.169" },
  { id: 728, name: "728-rc81542-Drive", ip: "192.168.157.171" },
  { id: 729, name: "729-rc81546-Drive", ip: "192.168.157.173" },
  { id: 730, name: "730-rc81549-Drive", ip: "192.168.157.174" },
  { id: 731, name: "731-rc81552-Drive", ip: "192.168.157.175" },
  { id: 732, name: "732-rc81555-Drive", ip: "192.168.157.176" },
  { id: 733, name: "733-rc81558-Drive", ip: "192.168.157.177" },
  { id: 734, name: "734-rc81562-Drive", ip: "192.168.157.178" },
  { id: 735, name: "735-rc81565-Drive", ip: "192.168.157.179" },
  { id: 736, name: "736-rc81568-Drive", ip: "192.168.157.180" },
  { id: 737, name: "737-rc81572-Drive", ip: "192.168.157.181" },
  { id: 738, name: "738-tt81573-Drive", ip: "192.168.157.182" },
  { id: 739, name: "739-rc81573-Drive", ip: "192.168.157.183" },
];

module.exports = drives;
