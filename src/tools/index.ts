import { tool as base64FileConverter } from './base64-file-converter';
import { tool as base64StringConverter } from './base64-string-converter';
import { tool as basicAuthGenerator } from './basic-auth-generator';
import { tool as dnsQueries } from './dns-queries';
import { tool as icoConverter } from './ico-converter';
import { tool as jsonEditor } from './json-editor';
import { tool as slaCalculator } from './sla-calculator';
import { tool as smartTextReplacer } from './smart-text-replacer';
import { tool as volumeConverter } from './volume-converter';
import { tool as pressureConverter } from './pressure-converter';
import { tool as massConverter } from './mass-converter';
import { tool as lengthConverter } from './length-converter';
import { tool as forceConverter } from './force-converter';
import { tool as energyConverter } from './energy-converter';
import { tool as areaConverter } from './area-converter';
import { tool as angleConverter } from './angle-converter';
import { tool as emailNormalizer } from './email-normalizer';
import { tool as bounceParser } from './bounce-parser';
import { tool as codeHighlighter } from './code-highlighter';
import { tool as colorWheel } from './color-wheel';
import { tool as currencyConverter } from './currency-converter';
import { tool as emailParser } from './email-parser';
import { tool as outlookParser } from './outlook-parser';
import { tool as fileHasher } from './file-hasher';
import { tool as hexFileConverter } from './hex-file-converter';
import { tool as icalMerger } from './ical-merger';
import { tool as imageConverter } from './image-converter';
import { tool as integersToIp } from './integers-to-ip';
import { tool as jqTester } from './jq-tester';
import { tool as jsonpathMemo } from './jsonpath-memo';
import { tool as jqMemo } from './jq-memo';
import { tool as jsUnobfuscator } from './js-unobfuscator';
import { tool as jsonToPhpArray } from './json-to-php-array';
import { tool as phpArrayToJson } from './php-array-to-json';
import { tool as jsonSizeAnalyzer } from './json-size-analyzer';
import { tool as jsonToCsharp } from './json-to-csharp';
import { tool as luhnValidator } from './luhn-validator';
import { tool as mathFormatsConverter } from './math-formats-converter';
import { tool as mathOcr } from './math-ocr';
import { tool as markdownTocGenerator } from './markdown-toc-generator';
import { tool as passphraseGenerator } from './passphrase-generator';
import { tool as pinCodeGenerator } from './pin-code-generator';
import { tool as punycodeConverter } from './punycode-converter';
import { tool as rsaEcdsaSigning } from './rsa-ecdsa-signing';
import { tool as smartRawConverter } from './smart-raw-converter';
import { tool as sslCertConverter } from './ssl-cert-converter';
import { tool as stacktracePrettier } from './stacktrace-prettier';
import { tool as dataTransferRateConverter } from './data-transfer-rate-converter';
import { tool as dataStorageUnitConverter } from './data-storage-unit-converter';
import { tool as unicodeSearch } from './unicode-search';
import { tool as vatValidator } from './vat-validator';
import { tool as websocketTester } from './websocket-tester';
import { tool as weekNumberConverter } from './week-number-converter';
import { tool as wpaPskGenerator } from './wpa-psk-generator';
import { tool as xpathTester } from './xpath-tester';
import { tool as xsltTester } from './xslt-tester';
import { tool as energyComputer } from './energy-computer';

import { tool as cssXpathConverter } from './css-xpath-converter';
import { tool as cssSelectorsMemo } from './css-selectors-memo';
import { tool as xpathMemo } from './xpath-memo';
import { tool as asciiTextDrawer } from './ascii-text-drawer';
import { tool as daysCalculator } from './days-calculator';
import { tool as dateDurationCalculator } from './date-duration-calculator';
import { tool as macAddressConverter } from './mac-address-converter';
import { tool as dockerComposeToKubernetesConverter } from './docker-compose-to-kubernetes';
import { tool as textToUnicode } from './text-to-unicode';
import { tool as certificateKeyParser } from './certificate-key-parser';
import { tool as crcCalculator } from './crc-calculator';
import { tool as ipGeoLocation } from './ip-geo-location';
import { tool as ocrImage } from './ocr-image';
import { tool as ansibleVaultCryptDecrypt } from './ansible-vault-crypt-decrypt';
import { tool as gzipConverter } from './gzip-converter';
import { tool as htpasswdGenerator } from './htpasswd-generator';
import { tool as safelinkDecoder } from './safelink-decoder';
import { tool as mongoObjectidConverter } from './mongo-objectid-converter';
import { tool as removeExif } from './remove-exif';
import { tool as xmlToJson } from './xml-to-json';
import { tool as jsonToXml } from './json-to-xml';
import { tool as regexTester } from './regex-tester';
import { tool as regexMemo } from './regex-memo';
import { tool as markdownToHtml } from './markdown-to-html';
import { tool as pasteAsMarkdown } from './paste-as-markdown';
import { tool as aiPromptSplitter } from './ai-prompt-splitter';
import { tool as apiTester } from './api-tester';
import { tool as commonRegexMemo } from './common-regex-memo';
import { tool as iso3166Searcher } from './iso-3166-searcher';
import { tool as curlConverter } from './curl-converter';
import { tool as durationCalculator } from './duration-calculator';
import { tool as folderStructureDiagram } from './folder-structure-diagram';
import { tool as hddCalculator } from './hdd-calculator';
import { tool as heicConverter } from './heic-converter';
import { tool as icalParser } from './ical-parser';
import { tool as icalGenerator } from './ical-generator';
import { tool as imageToCss } from './image-to-css';
import { tool as jsonToGo } from './json-to-go';
import { tool as jsonToSchema } from './json-to-schema';
import { tool as qrCodeDecoder } from './qr-code-decoder';
import { tool as timezoneConverter } from './timezone-converter';
import { tool as nginxFormatter } from './nginx-formatter';
import { tool as potrace } from './potrace';
import { tool as rmbNumbers } from './rmb-numbers';
import { tool as sensitiveDataMasker } from './sensitive-data-masker';
import { tool as textToUnicodeNames } from './text-to-unicode-names';
import { tool as torrentToMagnet } from './torrent-to-magnet';
import { tool as ttlCalculator } from './ttl-calculator';
import { tool as unicodeFormatter } from './unicode-formatter';

import { tool as asciiTextDrawer } from './ascii-text-drawer';

import { tool as textToUnicode } from './text-to-unicode';
import { tool as csrGenerator } from './csr-generator';
import { tool as dockerRunToKubernetesConverter } from './docker-run-to-kubernetes';
import { tool as dockerComposeValidator } from './docker-compose-validator';
import { tool as ecdsaKeyPairGenerator } from './ecdsa-key-pair-generator';
import { tool as ed25519KeyPairGenerator } from './ed25519-key-pair-generator';
import { tool as fileType } from './file-type';
import { tool as htmlCleaner } from './html-cleaner';
import { tool as imageToAsciiArt } from './image-to-ascii-art';
import { tool as pdfSignatureChecker } from './pdf-signature-checker';
import { tool as numeronymGenerator } from './numeronym-generator';
import { tool as macAddressGenerator } from './mac-address-generator';
import { tool as textToBinary } from './text-to-binary';
import { tool as ulidGenerator } from './ulid-generator';
import { tool as ibanValidatorAndParser } from './iban-validator-and-parser';
import { tool as stringObfuscator } from './string-obfuscator';
import { tool as textDiff } from './text-diff';
import { tool as airCodes } from './air-codes';
import { tool as emojiPicker } from './emoji-picker';
import { tool as passwordStrengthAnalyser } from './password-strength-analyser';
import { tool as yamlToToml } from './yaml-to-toml';
import { tool as jsonToToml } from './json-to-toml';
import { tool as tomlToYaml } from './toml-to-yaml';
import { tool as tomlToJson } from './toml-to-json';
import { tool as jsonToCsv } from './json-to-csv';
import { tool as cameraRecorder } from './camera-recorder';
import { tool as listConverter } from './list-converter';
import { tool as listComparer } from './list-comparer';
import { tool as phoneParserAndFormatter } from './phone-parser-and-formatter';
import { tool as jsonDiff } from './json-diff';
import { tool as ipv4RangeExpander } from './ipv4-range-expander';
import { tool as httpStatusCodes } from './http-status-codes';
import { tool as yamlToJson } from './yaml-to-json-converter';
import { tool as jsonToYaml } from './json-to-yaml-converter';
import { tool as ipv6UlaGenerator } from './ipv6-ula-generator';
import { tool as ipv4AddressConverter } from './ipv4-address-converter';
import { tool as benchmarkBuilder } from './benchmark-builder';
import { tool as userAgentParser } from './user-agent-parser';
import { tool as ipv4SubnetCalculator } from './ipv4-subnet-calculator';
import { tool as dockerRunToDockerComposeConverter } from './docker-run-to-docker-compose-converter';
import { tool as htmlWysiwygEditor } from './html-wysiwyg-editor';
import { tool as rsaKeyPairGenerator } from './rsa-key-pair-generator';
import { tool as textToNatoAlphabet } from './text-to-nato-alphabet';
import { tool as slugifyString } from './slugify-string';
import { tool as keycodeInfo } from './keycode-info';
import { tool as jsonMinify } from './json-minify';
import { tool as bcrypt } from './bcrypt';
import { tool as bip39 } from './bip39-generator';
import { tool as caseConverter } from './case-converter';
import { tool as chmodCalculator } from './chmod-calculator';
import { tool as chronometer } from './chronometer';
import { tool as colorConverter } from './color-converter';
import { tool as crontabGenerator } from './crontab-generator';
import { tool as dateTimeConverter } from './date-time-converter';
import { tool as deviceInformation } from './device-information';
import { tool as cypher } from './encryption';
import { tool as etaCalculator } from './eta-calculator';
import { tool as percentageCalculator } from './percentage-calculator';
import { tool as gitMemo } from './git-memo';
import { tool as hashText } from './hash-text';
import { tool as hmacGenerator } from './hmac-generator';
import { tool as htmlEntities } from './html-entities';
import { tool as baseConverter } from './integer-base-converter';
import { tool as jsonViewer } from './json-viewer';
import { tool as jwtParser } from './jwt-parser';
import { tool as loremIpsumGenerator } from './lorem-ipsum-generator';
import { tool as mathEvaluator } from './math-evaluator';
import { tool as metaTagGenerator } from './meta-tag-generator';
import { tool as mimeTypes } from './mime-types';
import { tool as otpCodeGeneratorAndValidator } from './otp-code-generator-and-validator';
import { tool as qrCodeGenerator } from './qr-code-generator';
import { tool as wifiQrCodeGenerator } from './wifi-qr-code-generator';
import { tool as randomPortGenerator } from './random-port-generator';
import { tool as romanNumeralConverter } from './roman-numeral-converter';
import { tool as sqlPrettify } from './sql-prettify';
import { tool as svgPlaceholderGenerator } from './svg-placeholder-generator';
import { tool as temperatureConverter } from './temperature-converter';
import { tool as textStatistics } from './text-statistics';
import { tool as tokenGenerator } from './token-generator';
import type { ToolCategory } from './tools.types';
import { tool as urlEncoder } from './url-encoder';
import { tool as urlParser } from './url-parser';
import { tool as uuidGenerator } from './uuid-generator';
import { tool as macAddressLookup } from './mac-address-lookup';
import { tool as xmlFormatter } from './xml-formatter';
import { tool as dockerComposeToDockerRunConverter } from './docker-compose-to-docker-run-converter';
import { tool as pdfEncrypt } from './pdf-encrypt';
import { tool as pdfLinearize } from './pdf-linearize';
import { tool as manyUnitsConverter } from './many-units-converter';
import { tool as powerConverter } from './power-converter';
import { tool as dockerComposeConverter } from './docker-compose-converter';
import { tool as imageExifReader } from './image-exif-reader';
import { tool as yamlViewer } from './yaml-viewer';
import { tool as barcodeReader } from './barcode-reader';
import { tool as barcodeGenerator } from './barcode-generator';
import { tool as htmlToMarkdown } from './html-to-markdown';
import { tool as pdfUnlock } from './pdf-unlock';

export const toolsByCategory: ToolCategory[] = [
  {
    name: 'Crypto',
    components: [
      tokenGenerator,
      hashText,
      crcCalculator,
      fileHasher,
      passphraseGenerator,
      pinCodeGenerator,
      hashText,
      bcrypt,
      uuidGenerator,
      ulidGenerator,
      cypher,
      bip39,
      hmacGenerator,
      rsaKeyPairGenerator,
      certificateKeyParser,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      pdfEncrypt,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      pdfLinearize,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      pdfUnlock,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      // pgpEncryption,
      rsaEcdsaSigning,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      wpaPskGenerator,
      ansibleVaultCryptDecrypt,
      csrGenerator,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
      ecdsaKeyPairGenerator,
      ed25519KeyPairGenerator,
      passwordStrengthAnalyser,
      pdfSignatureChecker,
    ],
  },
  {
    name: 'Converter',
    components: [
      dateTimeConverter,
      timezoneConverter,
      baseConverter,
      romanNumeralConverter,
      base64StringConverter,
      base64FileConverter,
      hexFileConverter,
      colorConverter,
      caseConverter,
      textToNatoAlphabet,
      textToBinary,
      textToUnicode,
      textToUnicodeNames,
      yamlToJson,
      yamlToToml,
      jsonToYaml,
      jsonToToml,
      listConverter,
      listComparer,
      tomlToJson,
      tomlToYaml,
      htmlToMarkdown,
      xmlToJson,
      jsonToXml,
      markdownToHtml,
      currencyConverter,
      hddCalculator,
      jsonToCsharp,
      jsonToGo,
      markdownTocGenerator,
      rmbNumbers,
      smartRawConverter,
      weekNumberConverter,
      xmlToJson,
      jsonToXml,
      gzipConverter,
      htmlCleaner,
    ],
  },
  {
    name: 'Web',
    components: [
      urlEncoder,
      htmlEntities,
      urlParser,
      deviceInformation,
      basicAuthGenerator,
      htpasswdGenerator,
      metaTagGenerator,
      otpCodeGeneratorAndValidator,
      mimeTypes,
      jwtParser,
      keycodeInfo,
      slugifyString,
      htmlWysiwygEditor,
      userAgentParser,
      httpStatusCodes,
      jsonDiff,
      safelinkDecoder,
      apiTester,
      bounceParser,
      colorWheel,
      folderStructureDiagram,
      imageToCss,
      jsUnobfuscator,
      jsonToPhpArray,
      phpArrayToJson,
      torrentToMagnet,
      unicodeSearch,
    ],
  },
  {
    name: 'Images and videos',
    components: [
      qrCodeGenerator,
      wifiQrCodeGenerator,
      svgPlaceholderGenerator,
      cameraRecorder,
      barcodeReader,
      barcodeGenerator,
      heicConverter,
      icoConverter,
      imageConverter,
      ocrImage,
      potrace,
      qrCodeDecoder,
      svgPlaceholderGenerator,
      cameraRecorder,
      removeExif,
      imageToAsciiArt,
      imageExifReader,
    ],
  },
  {
    name: 'Development',
    components: [
      gitMemo,
      randomPortGenerator,
      crontabGenerator,
      jsonViewer,
      jsonMinify,
      jsonSizeAnalyzer,
      jsonToCsv,
      sqlPrettify,
      chmodCalculator,
      dockerRunToDockerComposeConverter,
      dockerComposeToDockerRunConverter,
      dockerComposeToKubernetesConverter,
      dockerRunToKubernetesConverter,
      dockerComposeValidator,
      dockerComposeConverter,
      xmlFormatter,
      xsltTester,
      yamlViewer,
      jsonEditor,
      emailNormalizer,
      codeHighlighter,
      regexTester,
      regexMemo,
      commonRegexMemo,
      cssXpathConverter,
      cssSelectorsMemo,
      xpathMemo,
      curlConverter,
      jqTester,
      jqMemo,
      jsonpathMemo,
      jsonToSchema,
      mongoObjectidConverter,
      nginxFormatter,
      regexTester,
      regexMemo,
      stacktracePrettier,
      xpathTester,
      fileType,
    ],
  },
  {
    name: 'Network',
    components: [
      ipv4SubnetCalculator,
      ipv4AddressConverter,
      // ipv6AddressConverter,
      ipv4RangeExpander,
      macAddressLookup,
      macAddressGenerator,
      ipv6UlaGenerator,
      dnsQueries,
      emailParser,
      outlookParser,
      integersToIp,
      ipGeoLocation,
      macAddressConverter,
      ipv6UlaGenerator,
      punycodeConverter,
      sslCertConverter,
      websocketTester,
    ],
  },
  {
    name: 'Math',
    components: [
      mathEvaluator,
      etaCalculator,
      percentageCalculator,
      mathFormatsConverter,
      mathOcr,
      dataTransferRateConverter,
      dataStorageUnitConverter,
      ttlCalculator,
      percentageCalculator,
      angleConverter,
    ],
  },
  {
    name: 'Measurement',
    components: [
      chronometer,
      temperatureConverter,
      daysCalculator,
      durationCalculator,
      dateDurationCalculator,
      benchmarkBuilder,
      benchmarkBuilder,
      slaCalculator,
      manyUnitsConverter,
      temperatureConverter,
      pressureConverter,
      massConverter,
      lengthConverter,
      areaConverter,
      volumeConverter,
      forceConverter,
      energyConverter,
      powerConverter,
      benchmarkBuilder,
      benchmarkBuilder,
      energyComputer,
    ],
  },
  {
    name: 'Text',
    components: [
      loremIpsumGenerator,
      textStatistics,
      emojiPicker,
      stringObfuscator,
      textDiff,
      numeronymGenerator,
      aiPromptSplitter,
      smartTextReplacer,
      asciiTextDrawer,
      pasteAsMarkdown,
      iso3166Searcher,
      icalGenerator,
      icalParser,
      icalMerger,
      sensitiveDataMasker,
      unicodeFormatter,
      asciiTextDrawer,
    ],
  },
  {
    name: 'Data',
    components: [
      phoneParserAndFormatter,
      ibanValidatorAndParser,
      luhnValidator,
      vatValidator,
      airCodes,
    ],
  },
];

export const tools = toolsByCategory.flatMap(({ components }) => components);
export const toolsWithCategory = toolsByCategory.flatMap(({ components, name }) =>
  components.map(tool => ({ category: name, ...tool })),
);
