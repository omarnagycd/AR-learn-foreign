# First Letters

Live: https://arabic-first.s21smk.workers.dev/

Joyful green-and-white beginner Arabic prototype with Home, Letters, Sentences and Quizzes. Saved Arabic/English interface choice, RTL Arabic layout, and light/dark themes. Responsive phone/desktop views.

All 28 letters have five-stage practice across 16 freely selectable groups: letter-name listening, connected shapes, animated shape reveal, finger/mouse tracing, and listening plus shape checks. There are 28 generated letter-name clips. The original detailed baa/taa/thaa stroke demo and word examples remain linked as an extra, not removed. New animation is a shape reveal, not a certified stroke-order model. Tracing is not graded.

Three four-stage MSA sentence lessons use eight generated phrase clips. Three original quiz sets include a 28-question all-letter set, a five-question sentence set, and a six-question mixed set.

Progress is localStorage in this browser, with a storage caveat and two-click reset. Keep the site's browser data to keep progress; clearing data, private browsing or a different browser can start a fresh record. No backend, sign-in, analytics, handwriting upload or cross-device sync. Preferences use separate storage keys and survive a progress reset. Earlier dot-family and sentence completion are retained; older letter quiz completion is reset once because the quiz now covers all 28 letters.

Sources are linked per lesson/question: Princeton contextual forms, BBC alphabet guide, LibreTexts Arabic Level One, and MSU Elementary Arabic I. No institutional endorsement. Original questions/art, no copied exercise/media banks. Main track is labeled Modern Standard Arabic. Generated audio and curriculum need teacher review before official release. Transliteration is approximate.

Deploy public/ with wrangler.jsonc to arabic-first only. RoomPulse is outside this project. Font licensing: FONT-LICENSE.txt.

qa-all-letters.mjs covers every stage of every letter group, all audio assets, all sentence lessons, all quiz sets, mouse/touch tracing, saved progress, group picking, confirmed reset, both languages, both themes and 1440/390/320px widths. QA_FAST=1 exercises reduced-motion animation; omit for the full reveal timing. TEST_URL can target the hosted build.

Learner notice: appears once per full page visit/reload, never on internal hash navigation. Auto-dismisses after about 9 seconds of foreground viewing, pauses on pointer hover/keyboard focus/hidden page, supports X/Escape and progress settings link. Localized in both languages and styled for both themes. No progress mutation.

The popup now explains automatic progress saving with no login/account and the same-device/browser requirement, not the prototype/audio disclaimer. Permanent learning notes elsewhere are unchanged.

## Picture words, guide and whole-content progress
Twelve source-linked MSA picture words are grouped as food, home and surroundings. Original illustrations and generated word recordings are bundled. Each option has separate audio. Picture quizzes lock the first choice, keep an exact score, and show every missed word with a card and missed-word retry. An interrupted round contributes answer evidence, not a finished score. Latest evidence wins over old scores. Quiz evidence, heard words and completed rounds are local to this browser.

The local rule-based guide is not a chatbot and never estimates CEFR or general Arabic proficiency. It distinguishes no evidence, partial coverage, weak/latest-correct recognition and due recall, and prioritizes exact words/groups to review. Repetition and listening assistance are disclosed. Existing letter/sentence quizzes also save first-answer evidence. The current catalog-derived total is 108 practice items: 80 letter steps, 12 sentence steps, 12 word audio cards and four quiz sets. Completion is not accuracy or mastery. New catalog items increase the total without erasing completed work. The sticky progress strip stays visible on every view.

Mr. Hisham's Corner is deliberately empty pending the owner's files. Add approved records to teacherContent in public/teacher-corner.js. Image paths are under /images/; PDFs under /materials/; videos use valid YouTube IDs with privacy-enhanced embeds. PDFs display in an in-page browser viewer with a separate-open fallback. Each valid published record becomes one manually marked practice item. Do not ship dummy content. No teacher account, upload dashboard or external video-hosting account has been created. PDF rendering on a particular device must be checked with the actual supplied file.

Liquid-glass navigation approved and deployed in both themes, with a moving active indicator and reduced-motion support. The approved whole-site glass treatment is deployed in public/glass.css.

Additional tests: qa-words.mjs, qa-catalog.mjs and qa-glass.mjs. Words and nav passed against the hosted build; all-letters and notice regressions passed locally. The 12 word MP3s decoded without errors. Teacher review of generated pronunciation is still required. Current release: 9b70a897-978b-441c-8295-265e8728cd1e.

## Approved whole-site glass release
The approved full-site green glass treatment is in public/glass.css, including lessons, cards, quiz answer states and dialogs. Corner is now the sixth and final bottom tab in reading order, including at 320px. The owner-requested original-art/generated-audio/teacher-review UI notices were removed from pages, source notes and the legacy demo. Source references and font licensing remain. Generated content still needs teacher review before formal course use; removing UI copy does not certify it. No mandatory on-screen attribution was identified for original media and factual word references. Latest deployed release: 9b70a897-978b-441c-8295-265e8728cd1e. The Arabic showcase PNG was refreshed from these live screens.

Auto-dismiss learner notice and feedback toast now share the glass treatment in both themes, including close controls and the notice countdown. Manual close, Escape, countdown, revisit behavior and live theme/language switches passed at 320/390/1440. Live corner notice and feedback toast checked in both themes.
