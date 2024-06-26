import React from 'react';
import {View} from 'react-native';
import useThemeStyles from '@hooks/useThemeStyles';
import * as UserUtils from '@libs/UserUtils';
import CONST from '@src/CONST';
import Avatar from './Avatar';
import AvatarSkeleton from './AvatarSkeleton';
import * as Expensicons from './Icon/Expensicons';
import Indicator from './Indicator';
import Tooltip from './Tooltip';

type AvatarWithIndicatorProps = {
    /** URL for the avatar */
    source?: UserUtils.AvatarSource;

    /** Account id if it's user avatar */
    accountID?: number;

    /** To show a tooltip on hover */
    tooltipText?: string;

    /** A fallback avatar icon to display when there is an error on loading avatar from remote URL. */
    fallbackIcon?: UserUtils.AvatarSource;

    /** Indicates whether the avatar is loaded or not  */
    isLoading?: boolean;
};

function AvatarWithIndicator({source, accountID, tooltipText = '', fallbackIcon = Expensicons.FallbackAvatar, isLoading = true}: AvatarWithIndicatorProps) {
    const styles = useThemeStyles();

    return (
        <Tooltip text={tooltipText}>
            <View style={[styles.sidebarAvatar]}>
                {isLoading ? (
                    <AvatarSkeleton />
                ) : (
                    <>
                        <Avatar
                            size={CONST.AVATAR_SIZE.SMALL}
                            source={UserUtils.getSmallSizeAvatar(source, accountID)}
                            fallbackIcon={fallbackIcon}
                            avatarID={accountID}
                        />
                        <Indicator />
                    </>
                )}
            </View>
        </Tooltip>
    );
}

AvatarWithIndicator.displayName = 'AvatarWithIndicator';

export default AvatarWithIndicator;
