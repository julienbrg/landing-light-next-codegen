// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: mr2o8bouTSZ9Nta4UXSRWC
// Component: zYSyLfIjgEZ1WK
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 0oc86E9A5QgpSg/component
import TextInput from "../../TextInput"; // plasmic-import: Lq16G_qhdFma8i/component

import { useScreenVariants as useScreenVariantsaclaIcJwi6QQeQ } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: ACLAIcJWI6qQeQ/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_light_saa_s_landing_page.module.css"; // plasmic-import: mr2o8bouTSZ9Nta4UXSRWC/projectcss
import sty from "./PlasmicFooterSection.module.css"; // plasmic-import: zYSyLfIjgEZ1WK/css

import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg"; // plasmic-import: htBESlEpLU08Vs/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg"; // plasmic-import: xzNx9ugLldsYfb/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg"; // plasmic-import: iXFsiFKo73VNaI/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg"; // plasmic-import: 5PdD9ci_4zXboL/icon
import Searchsvg2Icon from "./icons/PlasmicIcon__Searchsvg2"; // plasmic-import: nRzwnCujglgLPg/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: t0_rYskSRwjW0y/icon
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight"; // plasmic-import: g4ASVL5lJAFAw3/icon

export type PlasmicFooterSection__VariantMembers = {};
export type PlasmicFooterSection__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterSection__VariantsArgs;
export const PlasmicFooterSection__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterSection__ArgsType = {};
type ArgPropType = keyof PlasmicFooterSection__ArgsType;
export const PlasmicFooterSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFooterSection__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  textInput?: p.Flex<typeof TextInput>;
  textbox?: p.Flex<typeof TextInput>;
};

export interface DefaultFooterSectionProps {
  className?: string;
}

function PlasmicFooterSection__RenderFunc(props: {
  variants: PlasmicFooterSection__VariantsArgs;
  args: PlasmicFooterSection__ArgsType;
  overrides: PlasmicFooterSection__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsaclaIcJwi6QQeQ()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ju6WF)}
      >
        <div className={classNames(projectcss.all, sty.freeBox___7Qkof)}>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto" as const}
            displayMaxHeight={"35px" as const}
            displayMaxWidth={"229px" as const}
            displayMinHeight={"0" as const}
            displayMinWidth={"0" as const}
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/light_saa_s_landing_page/images/logoFooterpng.png",
              fullWidth: 458,
              fullHeight: 70,
              aspectRatio: undefined
            }}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__edWqB
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
            }
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__d25Yn)}>
            <FacebooksvgIcon
              className={classNames(projectcss.all, sty.svg__nJ1Jy)}
              role={"img"}
            />

            <TwittersvgIcon
              className={classNames(projectcss.all, sty.svg__zZacr)}
              role={"img"}
            />

            <InstagramsvgIcon
              className={classNames(projectcss.all, sty.svg__j8Lpb)}
              role={"img"}
            />

            <LinkedinsvgIcon
              className={classNames(projectcss.all, sty.svg__hoIuY)}
              role={"img"}
            />
          </div>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__xnGeo)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__nchml
            )}
          >
            {"Menu"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__iQ4Ze)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__edWKt)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__eMqwM)}
                role={"img"}
              />
            }
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__p64Kt
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"How it work"}
            </p.PlasmicLink>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__wtCOa)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__aGt59)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__xYnhR)}
                role={"img"}
              />
            }
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__cW59
              )}
              component={Link}
              platform={"nextjs"}
            >
              {"Pricing"}
            </p.PlasmicLink>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__lhRqR)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__oai2K)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__sszSs)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___0Adft
              )}
            >
              {"FAQs"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__aqbBi)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__uaLrt
            )}
          >
            {"Help"}
          </h4>

          <Button
            className={classNames("__wab_instance", sty.button__rtwNl)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___5Wiu4)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__rCkWi)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xdEQj
              )}
            >
              {"Privacy and Policy"}
            </div>
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__vEhi)}
            color={"footerButton" as const}
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg___3MKtq)}
                role={"img"}
              />
            }
            link={"#" as const}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__m7GC)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mfjDu
              )}
            >
              {"Terms of Use"}
            </div>
          </Button>
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__bURcH)}>
          <h4
            className={classNames(
              projectcss.all,
              projectcss.h4,
              projectcss.__wab_text,
              sty.h4__ygWOr
            )}
          >
            {"Company"}
          </h4>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yHXaj
            )}
          >
            {"Lorem ipsum dolor sit amet, consectetur."}
          </div>

          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
          />

          <Button
            className={classNames("__wab_instance", sty.button___0LMqd)}
            color={"white" as const}
            small={
              hasVariant(globalVariants, "screen", "mobile") ? true : undefined
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8Qhir
              )}
            >
              {hasVariant(globalVariants, "screen", "mobile")
                ? "Subscribe"
                : "Subscribe"}
            </div>
          </Button>
        </div>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__wtfJs)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__wqW8Q
          )}
        >
          {"Copyrights © 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "textInput", "textbox"],
  img: ["img"],
  textInput: ["textInput", "textbox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  textInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooterSection__VariantsArgs;
    args?: PlasmicFooterSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooterSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooterSection__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection";
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    textInput: makeNodeComponent("textInput"),

    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps
  }
);

export default PlasmicFooterSection;
/* prettier-ignore-end */
